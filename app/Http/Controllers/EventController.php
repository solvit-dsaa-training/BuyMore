<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'title' => 'required|min:10',
            'desc' => 'required|min:20',
            'image' => 'required|mimes:jpg,png,jpeg,gif,svg',
            'startDate' => 'required',
            'endDate' => 'required',
            'status' => 'required',
            'location' => 'required|min:5',
            'venue' => 'required|min:10',
            'organizer' => "Required|min:3",
            'category' => 'required|min:10',
            'address' => 'required|min:10',
            'phone' => 'required|min:10|max:13',
            'email' => 'required|email'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
          }

        $path = $request->file('image')->store('images/eventBanner'); 
        $save = new Event; 
        $save->owner = $request->cookie('data');
        $save->title = $request->input('title');
        $save->description = $request->input('desc');
        $save->bannerImage = $path;
        $save->startDate = $request->input('startDate');
        $save->endDate = $request->input('endDate');
        $save->status = $request->input('status');
        $save->location = $request->input('location');
        $save->venue = $request->input('venue');
        $save->organizer = $request->input('organizer');
        $save->category = $request->input('category');
        $save->address = $request->input('address');
        $save->phone = $request->input('phone');
        $save->email = $request->input('email');
 
        $save->save();
 
        return $save;
 
    }
}
