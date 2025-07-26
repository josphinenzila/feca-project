<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Presenters\UserPresenter;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function __construct(
        protected UserService $service
    ) {}

    public function index(Request $request)
    {
        return $this->paginate(
            $this->service->getUsers($request),
            true,
            new UserPresenter()
        );
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $response = $this->service->getUser($request, $id);

        return response()->json(['data' => $response]);
    }

    public function store(UserRequest $request): JsonResponse
    {
        $response = $this->service->createUser($request);

        return response()->json(['data' => $response], Response::HTTP_CREATED);
    }

    public function update(UserRequest $request, int $id): JsonResponse
    {
        $response = $this->service->updateUser($request, $id);

        return response()->json(['data' => $response]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->service->deleteUser($id);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
