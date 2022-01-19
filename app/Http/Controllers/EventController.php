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
            'image' => 'required|mimes:jpg,png,jpeg,gif,svg'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
          }

        $path = $request->file('image')->store('images'); 
        $save = new Event; 
        $save->title = $request->input('title');
        $save->description = $request->input('desc');
        $save->bannerImage = $path;
 
        $save->save();
 
        return $save;
 
    }
}
