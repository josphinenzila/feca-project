<?php

use App\Helpers\Permissions;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Auth routes
    Route::prefix('auth')->group(function () {
        Route::post('register', [AuthController::class, 'register']);
        Route::post('login', [AuthController::class, 'login']);
        Route::post('refresh', [AuthController::class, 'refresh']);
    });
    // Protected routes
    Route::middleware('jwt.auth')->group(function () {

        // Role routes
        Route::apiResource('roles', RoleController::class)
            ->except(['store'])
            ->middleware('permissions:' . implode(',', Permissions::userManagement()));

        Route::apiResource('permissions', PermissionController::class)
            ->except(['store', 'update', 'destroy'])
            ->middleware('permissions:' . implode(',', Permissions::userManagement()));

        // User routes
        Route::apiResource('users', UserController::class)
            ->middleware('permissions:' . implode(',', Permissions::userManagement()));
    });
});
