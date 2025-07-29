<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateUserRequest extends FormRequest
{
    /**
     * Indicates whether validation should stop after the first rule failure.
     *
     * @var bool
     */

    protected $stopOnFirstFailure = true;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [

            'firstName' => 'required|string|min:3|max:255',
            'lastName' => 'required|string|min:3|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
            ],
            'phoneNumber' => [
                'required',
                'regex:/^([+])\d{6,15}$/',
            ],

            'avatar' => 'nullable|string|max:255',
            'password' => 'required|string|min:8',
            'roleId' => ['required', Rule::exists('roles', 'id')],
        ];
    }
}
