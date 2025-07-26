<?php

namespace App\Transformers;

use App\Entities\Permission;
use League\Fractal\TransformerAbstract;

/**
 * Class PermissionTransformer.
 *
 * @package namespace App\Transformers;
 */
class PermissionTransformer extends TransformerAbstract
{
    /**
     * Transform the Permission entity.
     *
     * @param \App\Entities\Permission $model
     *
     * @return array
     */
    public function transform(Permission $model)
    {
        return [
            'id' => (int) $model->id,
            'name' => $model->name,
            'code' => $model->code,
            'active' => $model->active,
            'createdAt' => $model->created_at->toDateTimeString(),
            'updatedAt' => $model->updated_at->toDateTimeString(),
        ];
    }
}
