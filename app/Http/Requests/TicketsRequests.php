<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketsRequests extends FormRequest
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

    public function attributes()
    {
        return [
            'type'=>'Ticket Type',
            'price'=>'Price',
            'number'=>'Number of tickets',
            'description'=>'Ticket Description',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type'=>'required|string|in:General,VIP,VVIP',
            'price'=>'required|integer|min:500',
            'number'=>'required|integer|min:5|max:10000000',
            'description'=>'string|nullable|min:10',
        ];
    }
}
