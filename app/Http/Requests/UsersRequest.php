<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'string|required|min:4|max:150',
            'email'    => 'unique:users,email|required|email|string|min:5',
            'phone'    => 'unique:users,phone|required|string|size:10',
            'password' => 'required',
        ];
    }
}
