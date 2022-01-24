<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class EventsRequest extends FormRequest
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
            'title'=>'bail|required|string|unique:events,title|min:5|max:255',
            'description'=>'string|required|min:20|max:5000',
            'banner'=>'required|image|mimes:png,jpg,webp|max:900',
            'eventDate'=>'date|after:'.Carbon::now().'required',
            'endDate'=>'date|nullable|after_or_equal:eventDate',
            'location'=>'required|string|min:4|max:255',
            'venue'=>'required|string',
            'organizer'=>'string|nullable|min:3|max:200',
            'category'=>'string|required',
            'address'=>'string|required',
            'phone'=>'required|digits:10',
            'email'=>'required|email|string|min:5|max:120',
        ];
    }
}
