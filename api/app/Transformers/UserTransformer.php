<?php

namespace App\Transformers;

use App\Entities\User;
use League\Fractal\TransformerAbstract;

/**
 * Class UserTransformer.
 *
 * @package namespace App\Transformers;
 */
class UserTransformer extends TransformerAbstract
{
    /**
     * Transform the User entity.
     *
     * @param \App\Entities\User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id' => $model->id,
            'firstName' => $model->first_name,
            'lastName' => $model->last_name,
            'email' => $model->email,
            'phoneNumber' => $model->phone_number,
            'avatar' => $model->avatar,
            'role' => $model->role->code,
            'roleId' => $model->role_id,
            'roleName' => $model->role->name,
            'rolePermissions' => $model->role->permissions,
            'active' => $model->active,
            'createdAt' => $model->created_at->toDateTimeString(),
            'updatedAt' => $model->updated_at->toDateTimeString(),
        ];
    }
}
