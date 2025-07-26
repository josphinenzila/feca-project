<?php

namespace Database\Seeders;

use App\Entities\Permission;
use App\Helpers\Constants;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    public function run(): void
    {
        collect([
            ['name' => 'Manage System', 'code' => Constants::MANAGE_SYSTEM],
            ['name' => 'Manage User', 'code' => Constants::MANAGE_USER],

        ])->each(fn($permission) => Permission::firstOrCreate(['code' => $permission['code']], $permission));
    }
}
