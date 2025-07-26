<?php

namespace App\Repositories;

use App\Entities\Role;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

class RoleRepositoryEloquent extends BaseRepository implements RoleRepository
{
    public function model()
    {
        return Role::class;
    }

    public function create(array $attributes)
    {
        return parent::create($this->extractAttributes($attributes));
    }

    public function update(array $attributes, $id)
    {
        $role = $this->find($id);
        $role->update($this->extractAttributes($attributes, $role));

        return $role->fresh();
    }

    protected function extractAttributes(array $data, ?Role $role = null): array
    {
        return [
            'name' => $data['name'] ?? $role?->name,
            'code' => $data['code'] ?? $role?->code,
            'permissions' => $data['permissions'] ?? $role?->permissions,
        ];
    }

    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
