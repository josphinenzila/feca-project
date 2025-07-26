<?php

namespace App\Transformers;

use App\Entities\Role;
use League\Fractal\TransformerAbstract;

/**
 * Class RoleTransformer.
 *
 * @package namespace App\Transformers;
 */
class RoleTransformer extends TransformerAbstract
{
    /**
     * Transform the Role entity.
     *
     * @param \App\Entities\Role $model
     *
     * @return array
     */
    public function transform(Role $model)
    {
        return [
            'id' => (int) $model->id,
            'name' => $model->name,
            'code' => $model->code,
            'permissions' => $model->permissions,
            'active' => $model->active,
            'createdAt' => $model->created_at->toDateTimeString(),
            'updatedAt' => $model->updated_at->toDateTimeString(),
        ];
    }
}
