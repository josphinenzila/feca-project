<?php

namespace App\Services;

use App\Criteria\PermissionFilterCriteria;
use App\Entities\Permission;
use App\Errors\NotFoundError;
use App\Presenters\PermissionPresenter;
use App\Repositories\PermissionRepository;
use Illuminate\Http\Request;

class PermissionService
{
    public function __construct(
        protected PermissionRepository $repository,
        protected PermissionPresenter $presenter = new PermissionPresenter()
    ) {}

    public function findById(int $id): Permission
    {
        return $this->repository->find($id) ?? throw new NotFoundError("Permission with ID {$id} not found");
    }

    public function getPermissions(Request $request): mixed
    {
        $this->repository->pushCriteria(new PermissionFilterCriteria($request));
        $perPage = min(config('repository.pagination.maxLimit'), $request->integer('perPage', 15));

        if ($request->query->has('keyword')) {
            $this->repository->scopeQuery(function ($query) use ($request) {
                $keyword = '%' . $request->input('keyword') . '%';
                return $query->where(function ($q) use ($keyword) {
                    $q->whereRaw('LOWER(name) LIKE LOWER(?)', [$keyword])
                        ->orWhereRaw('LOWER(code) LIKE LOWER(?)', [$keyword]);
                })->orWhereJsonContains('permissions', [$request->input('keyword')]);
            });
        }

        return $this->repository->latest()->paginate($perPage);
    }

    public function getPermission(Request $request, int $id): mixed
    {
        $this->repository->pushCriteria(new PermissionFilterCriteria($request));

        $role = $this->repository->find($id) ?? throw new NotFoundError("Permission with ID {$id} not found");

        return $this->presenter->present($role);
    }
}