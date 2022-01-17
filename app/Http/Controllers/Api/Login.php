<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UsersRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class Login extends Controller
{    
    public function __construct()
    {
        return auth()->shouldUse('api');
    } 

    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);

      if (!$token = auth()->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
      }

      // return $this->respondWithToken($token);
      return response()->json([
        $this->respondWithToken($token),
        'username'=>'success'
      ]);
    }

    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60
      ]);
    }
}
