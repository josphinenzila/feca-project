<?php

namespace Database\Seeders;

use App\Entities\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    public function run(): void
    {
        collect([
            [
                'first_name' => 'Admin',
                'last_name' => 'User',
                'email' => env('ADMIN_EMAIL', 'admin@example.com'),
                'phone_number' => '+254712345676',
                'password' => env('ADMIN_PASSWORD', 'adminuser'),
                'role_id' => 1,
            ],

        ])->each(fn($user) => User::firstOrCreate(['email' => $user['email']], $user));
    }
}
