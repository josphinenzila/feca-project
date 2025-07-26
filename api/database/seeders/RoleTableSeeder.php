<?php

namespace Database\Seeders;

use App\Entities\Role;
use App\Helpers\Constants;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    public function run(): void
    {
        collect([
            [
                'name' => 'System Admin',
                'code' => Constants::SYSTEM_ADMIN,
                'permissions' => [
                    Constants::MANAGE_SYSTEM, Constants::MANAGE_USER,
                ],
            ],
            [
                'name' => 'System Staff',
                'code' => Constants::SYSTEM_STAFF,
                'permissions' => [
                    Constants::MANAGE_SYSTEM, Constants::MANAGE_USER,
                ],
            ],
            [
                'name' => 'System User',
                'code' => Constants::SYSTEM_USER,
                'permissions' => [

                ],
            ],
        ])->each(fn($role) => Role::firstOrCreate(['code' => $role['code']],
            [
                'name' => $role['name'],
                'permissions' => $role['permissions'],
                'active' => true,
            ]));
    }
}
