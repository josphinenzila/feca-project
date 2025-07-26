<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

class RoleFilterCriteria implements CriteriaInterface
{
    protected $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function apply($model, RepositoryInterface $repository)
    {
        return $model
            ->when($this->request->query('permission'), fn($q) =>
                $q->whereJsonContains('permissions', [$this->request->query('permission')])
            )
            ->when($this->request->has('active'), fn($q) =>
                $q->where('active', $this->request->query('active') === 'true')
            );
    }
}
