<?php

namespace App\Http\Middleware;

use App\Errors\NotAuthorizedError;
use Closure;
use Illuminate\Http\Request;

class Permission
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param string ...$permissions
     * @throws NotAuthorizedError
     */
    public function handle(Request $request, Closure $next, string ...$permissions)
    {
        try {
            // Get user permissions
            $userPermissions = token()->permissions ?? [];

            // Check if user has any of the required permissions
            $hasPermission = !empty(array_intersect($userPermissions, $permissions));

            if (!$hasPermission) {
                throw new NotAuthorizedError('Not authorized');
            }

            return $next($request);
        } catch (\Exception $e) {
            throw new NotAuthorizedError($e->getMessage());
        }
    }
}
