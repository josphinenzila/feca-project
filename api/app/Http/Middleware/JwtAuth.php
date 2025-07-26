<?php

namespace App\Http\Middleware;

use App\Errors\TokenExpiredError;
use Closure;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Firebase\JWT\SignatureInvalidException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use UnexpectedValueException;

class JwtAuth
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): mixed
    {
        try {
            $this->authenticate($request);
            return $next($request);
        } catch (\Throwable $e) {
            throw new TokenExpiredError($e->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }

    /**
     * Authenticate JWT token.
     */
    protected function authenticate(Request $request): void
    {
        $jwt = $request->bearerToken();

        if (!$jwt) {
            throw new \InvalidArgumentException("Authorization token not found in request.");
        }

        $publicKey = config('jwt.public_key');
        $algorithm = config('jwt.algorithm');

        // Ensure newlines are properly formatted
        $publicKey = str_replace('\n', "\n", $publicKey);

        try {
            $decoded = JWT::decode($jwt, new Key($publicKey, $algorithm));
            $request->offsetSet('user', (array) $decoded->data);
        } catch (ExpiredException $e) {
            throw new TokenExpiredError("Token has expired.", Response::HTTP_UNAUTHORIZED);
        } catch (SignatureInvalidException $e) {
            throw new TokenExpiredError("Invalid token signature.", Response::HTTP_UNAUTHORIZED);
        } catch (UnexpectedValueException $e) {
            throw new TokenExpiredError("Invalid token format.", Response::HTTP_UNAUTHORIZED);
        }
    }
}
