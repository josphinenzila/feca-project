<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Hash;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class User.
 *
 * @package namespace App\Entities;
 */
class User extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    protected $guarded = ['id', 'created_at'];
    protected $hidden = ['password'];

    protected $casts = ['active' => 'boolean'];

    public function setpasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value) ?? null;
    }

    public function getFullNameAttribute()
    {
        return ucfirst($this->first_name) . ' ' . ucfirst($this->last_name);
    }

    //Get the identifier that will be stored in the subject claim of the JWT.
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    // custom claims to be added to the JWT.
    public function getJWTCustomClaims(): array
    {
        return [
            'id' => $this->id,
            'role' => $this->role->name,
            'permissions' => $this->role->permissions,
            'active' => $this->active,
        ];
    }

    public function role(): HasOne
    {
        return $this->hasOne(Role::class, 'id', 'role_id');
    }

}
