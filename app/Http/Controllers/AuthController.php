<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    function login(Request $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response([
                'message' => 'Invalid credentials!'
            ],Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::User();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt',$token,60*24);
        return response([
            'token:'=>$token,
            'userId=' =>$user
        ])->withCookie($cookie);
    }

    function logout(){
        $cookie = cookie::forget('jwt');
        return response([
            'message'=>'success logout'
        ])->withCookie($cookie);
    }
}
