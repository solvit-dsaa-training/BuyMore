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
     * tags={"Users"},
     ** path="/register",
     *   summary="register new user",
     *   operationId="New User Registration",
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * @OA\Parameter(
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

    public $loginAfterSignUp = true;

    public function register(UsersRequest $request)
    {
      $user = User::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }
    /**
     * @OA\Post(
     * * tags={"Clients"},
     ** path="/register-client",
     *   summary="register new Cleint",
     *   operationId="New Client Registration",
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * @OA\Parameter(
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
    public function registerClient(UsersRequest $request)
    {
      $user = User::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'email' => $request->email,
        'role' => 'client',
        'password' => Hash::make($request->password),
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }
    /**
     * @OA\Post(
     * * tags={"System Admins"},
     ** path="/register-admin",
     *   summary="register Admin",
     *   operationId="Admin Sign-Up",
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
     * @OA\Parameter(
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
    public function registerAdmin(UsersRequest $request)
    {
      $user = User::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'email' => $request->email,
        'role' => 'admin',
        'password' => Hash::make($request->password),
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }
    /**
     * @OA\Put(
     * * * * tags={"General"},
     ** path="/update-user-info",
     *   summary="Update Profile Information",
     *   operationId="Admin Sign-Up",
     *   security={{"bearer":{}}},
     *  @OA\Parameter(
     *      name="name",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *    ),
     *    @OA\Parameter(
     *      name="phone",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
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
    public function updateUserInfo(Request $request)
    {
      $user = User::findOrFail(Auth::id());
      $data = $request->all();

        $validator = Validator::make($data, [
          'name'  => 'string|required|min:4|max:150',
          'email' => 'unique:users,email,'.$user->id.'|required|email|string|min:5',
          'phone' => 'unique:users,phone,'.$user->id.'|required|string|size:10',
        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors(), 'Validation Error']);
        }
      $user->update($request->all());
      return (new UserResource($user))
                  ->response()
                  ->setStatusCode(Response::HTTP_ACCEPTED);
    }
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

      return $this->respondWithToken($token);
    }
    /**
     * @OA\Get(
     * * tags={"Users"},
     ** path="/user",
     * summary="Get Logged In User",
     * operationId="user",
     * security={{"bearer":{}}},
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
    public function getAuthUser(Request $request)
    {
        return response()->json(auth()->user());
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

    /**
     * @OA\Put(
     * * * * tags={"General"},
     ** path="/update-password",
     *   summary="Password Updating",
     *   operationId="Admin Sign-Up",
     * security={{"bearer":{}}},
     *  @OA\Parameter(
     *      name="old_password",
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
     *    @OA\Parameter(
     *      name="confirm_password",
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
    public function updatePassword(Request $request){
      $validator = Validator::make($request->all(),[
        'old_password'=>'required',
        'password'=>'required|min:6|max:64|confirmed',
        'confirm_password'=>'required|same:password'
      ]);

      if($validator->fails()){
        return response()->json([
          'message'=>"Validation Fails",
          'Errors'=>$validator->errors()
        ],422);
      }

      $user = User::findOrFail(Auth::id());
      if(Hash::check($request->old_password,$user->password)){
        $user->update([
          'password'=>$request->password
        ]);
        return response()->json([
          'message'=>"Password Updated Successfully!"
        ],200);
      } else{
        return response()->json([
          'message'=>"Invalid Old Password!"
        ],400);
      }
    }

    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60
      ]);
    }

    /**
     * @OA\Get(
     * * tags={"System Admins"},
     ** path="/admin/users",
     * summary="Get list of all users",
     * security={{"bearer":{}}},
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
    public function getUsers()
    {
      $users = User::where('role','user')->get();
      return response()->json($users);
    }

    /**
     * @OA\Get(
     * * tags={"System Admins"},
     ** path="/admin/clients",
     * summary="Get list of all users",
     * security={{"bearer":{}}},
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
    public function getClients()
    {
      $users = User::where('role','client')->get();
      return response()->json($users);
    }

    /**
     * @OA\Get(
     * * tags={"System Admins"},
     ** path="/admin/users/{user}/view",
     * summary="View Specific user",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *  @OA\Parameter(
     *      name="user",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
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
    public function getUser(User $user)
    {
      return (new UserResource($user))
      ->response()
      ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Get(
     * * tags={"System Admins"},
     ** path="/admin/clients/{user}/view",
     * summary="View Specific user",
     * security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * *  @OA\Parameter(
     *      name="user",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
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
    public function getClient(User $user)
    {
      return (new UserResource($user))
      ->response()
      ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @OA\Put(
     * * * * tags={"System Admins"},
     ** path="/admin/users/{user}/block",
     *   summary="Block/Unblock Specific user",
     *   operationId="Admin Sign-Up",
     *  security={{"bearer":{}}},
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     * *  @OA\Parameter(
     *      name="user",
     *      in="path",
     *      required=true,
     *      @OA\Schema(
     *           type="integer"
     *      )
     *    ),
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
    public function blockUnblock(User $user)
    {

      $user = User::findOrFail($user->id);
      $user->update([
        'active'=>!$user->active
      ]);
      return response()->json([
        'message'=>"Active Status Changed Successfully!"
      ],200);
    }
}
