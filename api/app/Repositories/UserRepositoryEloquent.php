<?php

namespace App\Repositories;

use App\Entities\User;
use App\Repositories\UserRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    public function create(array $attributes)
    {
        dump($attributes);
        return parent::create([
            'first_name' => $attributes['firstName'],
            'last_name' => $attributes['lastName'],
            'email' => $attributes['email'],
            'phone_number' => $attributes['phoneNumber'],
            'avatar' => $attributes['avatar'] ?? null,
            'password' => $attributes['password'] ?? null,
            'role_id' => 3,
            'active' => $attributes['active'] ?? true,

        ]);
    }

    public function update(array $attributes, $id)
    {
        $user = $this->find($id);
        $user->update($this->extractAttributes($attributes, $user));

        return $user;
    }

    protected function extractAttributes(array $data, ?User $user = null): array
    {
        return [
            'first_name' => $data['firstName'] ?? $user?->first_name,
            'last_name' => $data['lastName'] ?? $user?->last_name,
            'email' => $data['email'] ?? $user?->email,
            'phone_number' => $data['phoneNumber'] ?? $user?->phone_number,
            'avatar' => $data['avatar'] ?? $user?->avatar,
            'role_id' => $data['roleId'] ?? $user?->role_id,
            'active' => $data['active'] ?? $user?->active ?? false,
        ];
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

}
