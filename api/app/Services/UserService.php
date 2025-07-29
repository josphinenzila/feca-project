<?php

namespace App\Services;

use App\Criteria\UserFilterCriteria;
use App\Entities\User;
use App\Errors\BadRequestError;
use App\Errors\NotFoundError;
use App\Presenters\UserPresenter;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserService
{
    public function __construct(
        protected UserRepository $repository,
        protected UserPresenter $presenter = new UserPresenter()
    ) {}

    public function findById(int $id): User
    {
        return $this->repository->find($id) ?? throw new NotFoundError("User with ID {$id} not found");
    }

    public function getUsers(Request $request): mixed
    {
        $this->repository->pushCriteria(new UserFilterCriteria($request));
        $perPage = min(config('repository.pagination.maxLimit'), $request->integer('perPage', 15));

        $this->repository->scopeQuery(function ($query) use ($request) {
            if ($request->query->has('keyword')) {
                $keyword = '%' . $request->input('keyword') . '%';
                $query = $query->where(function ($q) use ($keyword) {
                    $q->whereRaw('LOWER(first_name) LIKE LOWER(?)', [$keyword])
                        ->orWhereRaw('LOWER(last_name) LIKE LOWER(?)', [$keyword])
                        ->orWhereRaw('LOWER(email) LIKE LOWER(?)', [$keyword])
                        ->orWhereRaw('LOWER(phone_number) LIKE LOWER(?)', [$keyword]);
                });
            }
            return $query->orderBy('updated_at', 'desc');
        });

        return $this->repository->paginate($perPage);
    }

    public function getUser(Request $request, int $id): mixed
    {
        $this->repository->pushCriteria(new UserFilterCriteria($request));

        $user = $this->repository->find($id) ?? throw new NotFoundError("User with ID {$id} not found");

        return $this->presenter->present($user);
    }

    public function createUser(Request $request): mixed
    {
        dd($request);
        $user = $this->repository->create([
            $request->validated(),
        ]);

        return $this->presenter->present($user);
    }

    public function updateUser(Request $request, int $id): mixed
    {
        $user = $this->repository->find($id) ?? throw new BadRequestError("Invalid user with ID {$id}");

        $this->repository->update($request->validated(), $id);

        return $this->presenter->present($user->fresh());
    }

    public function deleteUser(int $id): void
    {
        $user = $this->repository->find($id) ?? throw new NotFoundError("User with ID {$id} not found");

        $user->delete();
    }
}
