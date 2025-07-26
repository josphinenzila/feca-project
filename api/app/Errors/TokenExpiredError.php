<?php

namespace App\Errors;

use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as Response;

class TokenExpiredError extends Exception
{
    public function __construct($message)
    {
        parent::__construct($message);
        $this->message = $message;
    }

    public function render(): JsonResponse
    {
        return response()->json([
            'errors' => [[
                'message' => $this->message,
                'field' => "generic",
            ]],
        ], Response::HTTP_UNAUTHORIZED);
    }
}
