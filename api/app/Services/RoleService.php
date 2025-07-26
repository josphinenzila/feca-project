<?php

namespace App\Services;

use App\Criteria\RoleFilterCriteria;
use App\Entities\Role;
use App\Errors\BadRequestError;
use App\Errors\InternalServerError;
use App\Errors\NotFoundError;
use App\Presenters\RolePresenter;
use App\Repositories\RoleRepository;
use Illuminate\Http\Request;

class RoleService
{
    public function __construct(
        protected RoleRepository $repository,
        protected RolePresenter $presenter = new RolePresenter()
    ) {}

    public function findById(int $id): Role
    {
        return $this->repository->find($id) ?? throw new NotFoundError("Role with ID {$id} not found");
    }

    public function getRoles(Request $request): mixed
    {
        $this->repository->pushCriteria(new RoleFilterCriteria($request));
        $perPage = min(config('repository.pagination.maxLimit'), $request->integer('perPage', 15));

        if ($request->query->has('keyword')) {
            $this->repository->scopeQuery(function ($query) use ($request) {
                $keyword = '%' . $request->input('keyword') . '%';
                return $query->where(function ($q) use ($keyword) {
                    $q->whereRaw('LOWER(name) LIKE LOWER(?)', [$keyword])
                        ->orWhereRaw('LOWER(code) LIKE LOWER(?)', [$keyword]);
                })
                    ->orWhereJsonContains('permissions', [$request->input('keyword')]);
            });
        }
        return $this->repository->latest()->paginate($perPage);
    }

    public function getRole(Request $request, int $id): mixed
    {
        $this->repository->pushCriteria(new RoleFilterCriteria($request));

        $role = $this->repository->find($id) ?? throw new NotFoundError("Role with ID {$id} not found");

        return $this->presenter->present($role);
    }

    public function updateRole(Request $request, int $id): mixed
    {
        $role = $this->repository->find($id) ?? throw new BadRequestError("Invalid role with ID {$id}");

        $role->update($request->validated());

        return $this->presenter->present($role->fresh());
    }

    public function deleteRole(int $id): void
    {
        $role = $this->repository->find($id) ?? throw new NotFoundError("Role with ID {$id} not found");

        try {
            $role->delete();
        } catch (\Exception $e) {
            throw new InternalServerError("Failed to delete role: {$e->getMessage()}");
        }
    }
}
