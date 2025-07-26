<?php

namespace App\Criteria;

use App\Entities\User;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class UserFilterCriteria.
 *
 * @package namespace App\Criteria;
 */
class UserFilterCriteria implements CriteriaInterface
{

    protected $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        return User::query()
            ->when($this->request->query('roleId'), function ($q) {
                $q->where('role_id', $this->request->query('roleId'));
            })

            ->when($this->request->query('active'), function ($q) {
                if ($this->request->query('active') == "true") {
                    $q->where('active', true);
                }

                if ($this->request->query('active') == "false") {
                    $q->where('active', false);
                }
            });
    }
}
