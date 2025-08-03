<?php

use App\Errors\BadRequestError;
use App\Errors\NotFoundError;
use App\Http\Middleware\Cors;
use App\Http\Middleware\JwtAuth;
use App\Http\Middleware\Permission;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        apiPrefix: 'api',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append(Cors::class);

        // Register middleware aliases
        $middleware->alias([
            'jwt.auth' => JwtAuth::class,
            'permissions' => Permission::class,
        ]);
    })

    ->withExceptions(function (Exceptions $exceptions) {

        // Handle custom BadRequestError (from AuthService)
        $exceptions->render(function (BadRequestError $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'errors' => [[
                        'message' => $e->getMessage(),
                    ]],
                ], Response::HTTP_BAD_REQUEST);
            }
        });

        // Handle custom NotFoundError
        $exceptions->render(function (NotFoundError $e, Request $request) {
            if ($request->is('api/*')) {
                try {
                    $decoded = json_decode($e->getMessage(), true);
                    $message = $decoded['error']['message'] ?? $e->getMessage();
                    $code = $decoded['error']['code'] ?? Response::HTTP_NOT_FOUND;
                } catch (\Exception $jsonError) {
                    $message = $e->getMessage();
                    $code = Response::HTTP_NOT_FOUND;
                }

                return response()->json([
                    'errors' => [[
                        'message' => $message,
                    ]],
                ], $code);
            }
        });

        // Handle Laravel's built-in NotFoundHttpException
        $exceptions->render(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'errors' => [[
                        'message' => $e->getMessage(),
                    ]],
                ], Response::HTTP_NOT_FOUND);
            }
        });

        // Handle validation exceptions
        $exceptions->render(function (ValidationException $e, Request $request) {
            if ($request->is('api/*')) {
                $errors = [];
                foreach ($e->errors() as $field => $messages) {
                    foreach ($messages as $message) {
                        $errors[] = [
                            'message' => $message,
                            'field' => $field,
                        ];
                    }
                }

                return response()->json([
                    'errors' => $errors,
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        });

        // Handle general HTTP exceptions
        $exceptions->render(function (HttpException $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'errors' => [[
                        'message' => $e->getMessage() ?: 'An error occurred.',
                    ]],
                ], $e->getStatusCode());
            }
        });

        // Handle any other exceptions (catch-all for debugging)
        $exceptions->render(function (\Throwable $e, Request $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'errors' => [[
                        'message' => app()->environment('production')
                        ? 'An internal server error occurred.'
                        : $e->getMessage(),
                    ]],
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        });

    })->create();
