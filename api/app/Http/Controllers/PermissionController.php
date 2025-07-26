<?php

namespace App\Http\Controllers;

use App\Presenters\PermissionPresenter;
use App\Services\PermissionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function __construct(
        protected PermissionService $service
    ) {}

    public function index(Request $request)
    {
        return $this->paginate(
            $this->service->getPermissions($request),
            true,
            new PermissionPresenter()
        );
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $response = $this->service->getPermission($request, $id);

        return response()->json(['data' => $response]);
    }

}
