<?php

namespace App\Services;

use App\Errors\BadRequestError;
use App\Presenters\UserPresenter;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function __construct(
        protected readonly UserRepository $repository,
        protected readonly RoleService $roleService,
        protected readonly TokenService $tokenService,
        protected UserPresenter $presenter = new UserPresenter()
    ) {

    }
    public function register($request)
    {
        $user = $this->repository->create(
            $request->validated()
        );
        return $this->presenter->present($user);
    }

    public function login(Request $request): array
    {
        $credentials = $request->only(['email', 'password']);

        $user = $this->repository
            ->findByField('email', $credentials['email'])
            ->first() ?? throw new BadRequestError("Invalid credentials specified");

        Hash::check($credentials['password'], $user->password)
        || throw new BadRequestError("Invalid credentials specified");

        $role = $this->roleService->findById($user->role_id);

        return [
            'token' => $this->generateToken($user, $role),
            'refreshToken' => $this->tokenService->createRefreshToken(
                $user,
                $request->input('client')
            ),
            'user' => $this->presenter->present($user),
        ];
    }

    public function refresh(Request $request): array
    {
        // Clean up old tokens (older than 1 day)
        $this->tokenService->destroy();

        $token = $this->tokenService->check($request->refreshToken) ?? throw new BadRequestError("This token does not exist or is expired.");

        $user = $this->repository->find($token->user_id) ?? throw new BadRequestError("Invalid user specified");

        $role = $this->roleService->findById($user->role_id);

        return [
            'token' => $this->generateToken($user, $role),
            'refreshToken' => $request->refreshToken,
            'user' => $this->presenter->present($user),
        ];
    }

    private function generateToken(object $user, object $role): string
    {
        return $this->tokenService->signToken([
            'id' => $user->id,
            'role' => $role->code,
            'permissions' => $role->permissions,
            'active' => $user->active,
        ]);
    }

}
