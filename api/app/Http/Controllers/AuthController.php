<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RefreshTokenRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Services\AuthService;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    private AuthService $service;

    public function __construct(AuthService $service)
    {
        $this->service = $service;
    }

    public function register(RegisterUserRequest $request)
    {
        $response = $this->service->register($request);
        return response()->json(['data' => $response], Response::HTTP_OK);
    }
    public function login(LoginUserRequest $request)
    {
        $response = $this->service->login($request);
        return response()->json(['data' => $response], Response::HTTP_OK);
    }

    public function refresh(RefreshTokenRequest $request)
    {
        $response = $this->service->refresh($request);
        return response()->json(['data' => $response], Response::HTTP_OK);
    }

}
