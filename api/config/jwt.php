<?php

return [
    'public_key' => env('JWT_PUBLIC_KEY'),
    'algorithm' => env('JWT_ALGORITHM', 'RS256'),
];
