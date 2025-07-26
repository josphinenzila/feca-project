<?php

namespace App\Services;

use App\Entities\RefreshToken;
use App\Repositories\RefreshTokenRepository;
use Carbon\Carbon;
use Firebase\JWT\JWT;

class TokenService
{
    protected RefreshTokenRepository $repository;

    public function __construct(RefreshTokenRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * check
     *
     * @param  mixed $token
     * @return RefreshToken
     */
    public function check(string $token): RefreshToken | null
    {
        return $this->repository->findByField('token', $token)->first();
    }

    /**
     * createRefreshToken
     *
     * @param  mixed $user
     * @return mixed
     */
    public function createRefreshToken($user, $client): mixed
    {
        $record = $this->repository->create([
            'userId' => $user->id,
            'client' => $client,
            'expiredAt' => date('Y-m-d H:i:s', strtotime('+1 day')),
        ]);

        return $record->token;
    }

    /**
     * destroy
     *
     * @return void
     */
    public function destroy()
    {
        return $this->repository->where('expired_at', '<=', Carbon::now()->subDays(1))
            ->delete();
    }

    /**
     * signToken
     *
     * @param  mixed $data
     * @return string
     */
    public function signToken($data): string
    {
        $privateKey = env('JWT_PRIVATE_KEY');
        $algorithm = env('JWT_ALGORITHM', 'RS256');
        $privateKey = str_replace('\n', "\n", $privateKey);
        $exp = now()->addHour()->getTimestamp();

        return JWT::encode(
            compact('data', 'exp'),
            $privateKey,
            $algorithm
        );
    }
}
