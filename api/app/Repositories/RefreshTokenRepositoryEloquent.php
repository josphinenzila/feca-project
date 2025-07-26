<?php

namespace App\Repositories;

use App\Entities\RefreshToken;
use App\Repositories\RefreshTokenRepository;
use Illuminate\Support\Str;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class RefreshTokenRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class RefreshTokenRepositoryEloquent extends BaseRepository implements RefreshTokenRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return RefreshToken::class;
    }

    public function create(array $attributes)
    {
        return parent::forceCreate([
            'token' => Str::uuid(),
            'user_id' => $attributes['userId'],
            'expired_at' => $attributes['expiredAt'] ?? date('Y-m-d H:i:s', strtotime('+1 day')),
        ]);
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
