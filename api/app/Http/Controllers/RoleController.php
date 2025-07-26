<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Presenters\RolePresenter;
use App\Services\RoleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleController extends Controller
{
    public function __construct(
        protected RoleService $service
    ) {}

    public function index(Request $request)
    {
        return $this->paginate(
            $this->service->getRoles($request),
            true,
            new RolePresenter()
        );
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $response = $this->service->getRole($request, $id);

        return response()->json(['data' => $response]);
    }

    public function update(RoleRequest $request, int $id): JsonResponse
    {
        $response = $this->service->updateRole($request, $id);

        return response()->json(['data' => $response]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->service->deleteRole($id);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
