<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Middleware\CheckUser;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login',[AuthController::class,"login"]);

<<<<<<< Updated upstream
Route::middleware([CheckUser::class])->group(function () {
    Route::post('registerEvent',[EventController::class,"createEvent"]);
    Route::post('logout',[AuthController::class,"logout"]);
});
=======
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api','jwt.verify','active')->group(function(){
    Route::put('update-user-info',[UserApiController::class,'updateUserInfo']);
    Route::put('update-password',[UserApiController::class,'updatePassword']);
    Route::get('logout', [UserApiController::class,'logout']);
    Route::get('user', [UserApiController::class,'getAuthUser']);

    // only admin routes
    Route::middleware('admin')->prefix('admin')->group(function(){
        Route::get('users', [UserApiController::class,'getUsers']);
        Route::get('clients', [UserApiController::class,'getClients']);
        Route::get('users/{user}/view', [UserApiController::class,'getUser']);
        Route::get('clients/{user}/view', [UserApiController::class,'getClient']);
        Route::put('users/{user}/block', [UserApiController::class,'blockUnblock']);
        Route::post('register-client',[UserApiController::class,'registerClient']);
        Route::post('register-admin',[UserApiController::class,'registerAdmin']);
    });

    // only client routes
    Route::middleware('client')->prefix('dashboard')->group(function(){
        Route::post('register-event',[EventsController::class,'store']);
    });

    // only normal users routes
    Route::middleware('user')->group(function(){
        
    });
});

Route::post('register',[UserApiController::class,'register']);
Route::post('login', [UserApiController::class,'login']); 

>>>>>>> Stashed changes
