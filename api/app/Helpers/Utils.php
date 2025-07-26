<?php

use Illuminate\Support\Arr;

if (!function_exists('payload')) {

    /**
     * payload
     *
     * @return object
     */
    function token(): object
    {
        return (object) request()->user ?? new class
            {
            public function __get(string $name)
            {
                return null;
            }
        };
    }
}

if (!function_exists('mergeIncludes')) {
    /**
     * Merge fractal resource includes on-demand
     *
     * @param array $includes
     * @return void
     */
    function mergeIncludes(array $includes = []): void
    {
        $availableIncludes = array_filter(explode(',', request()->query('include', '')));
        request()->query->set('include', implode(',', $availableIncludes + $includes));
    }
}

if (!function_exists('hasInclude')) {
    /**
     * Check if the current request has an include parameter for the resource
     *
     * @param string $include
     * @return bool
     */
    function hasInclude(string $include): bool
    {
        $availableIncludes = array_filter(explode(',', request()->query('include', '')));

        return Arr::has($availableIncludes, $include);
    }
}

if (!function_exists('generateId')) {

    /**
     * generateId
     *
     * @param  mixed $length
     * @return string
     */
    function generateId(int $length): string
    {
        return strtoupper(substr(md5(microtime()), 0, $length));
    }
}

if (!function_exists('generateRandomNumber')) {

    /**
     * generateRandomNumber
     *
     * @param  mixed $length
     * @return string
     */
    function generateRandomPassword(int $length = 6): string
    {
        $chars = '0123456789';
        $count = mb_strlen($chars);

        for ($i = 0, $result = ''; $i < $length; $i++) {
            $index = rand(0, $count - 1);
            $result .= mb_substr($chars, $index, 1);
        }

        return $result;
    }
}
