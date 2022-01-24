<?php

namespace App\Http\Controllers\Api;

use JWTAuth;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\UsersRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;

class UserApiController extends Controller
{
    
    /**
     * @OA\Post(
     * * * * tags={"General"},
     ** path="/login",
     *   summary="User Login",
     *   operationId="login",
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);

      if (! $token = FacadesJWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'Invalid Credentials'], 401);
      }

      $key = $this->respondWithToken($token);

      return response()->json(["userInfo:"=>auth()->user(),"token:"=>$key]);
    }
    /**
     * @OA\Get(
     * * * tags={"General"},
     ** path="/logout",
     * security={{"bearer":{}}},
     *   summary="Logout Logged In User",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/
    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message'=>'Successfully logged out']);
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
