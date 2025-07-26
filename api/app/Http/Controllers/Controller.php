<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Arr;
use Prettus\Repository\Contracts\PresenterInterface;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    protected function paginate(LengthAwarePaginator $paginator, $transform = false, PresenterInterface $presentable = null): array
    {
        throw_if($transform && !$presentable, 'presenter class not provided');

        return [
            'data' => $transform ? collect($paginator->items())->map(fn($item) => $presentable->present($item)) : $paginator->items(),
            'meta' => [
                'from' => $paginator->firstItem(),
                'to' => $paginator->lastItem(),
                'total' => $paginator->total(),
                'perPage' => $paginator->perPage(),
                'lastPage' => $paginator->lastPage(),
                'prevPage' => $paginator->currentPage() > 1 ? $paginator->currentPage() - 1 : 1,
                'nextPage' => ceil($paginator->total() / $paginator->perPage()) > 1 ? $paginator->currentPage() + 1 : 1,
                'currentPage' => $paginator->currentPage(),
            ],

        ];
    }

    protected function json(mixed $data): JsonResponse
    {
        if (Arr::has($data, 'data')) {
            $data['data'] = $data['data'] === [] ? null : $data['data'];
        }
        return response()->json($data, Response::HTTP_OK);
    }

    protected function created(mixed $data): JsonResponse
    {
        return response()->json($data, Response::HTTP_CREATED);
    }
}
