<?php

namespace App\Helpers;

class Permissions
{
    public static function admin(): array
    {
        return [Constants::MANAGE_SYSTEM];
    }

    public static function userManagement(): array
    {
        return [Constants::MANAGE_SYSTEM, Constants::MANAGE_USER];
    }

}
