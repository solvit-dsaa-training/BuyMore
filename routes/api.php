<?php

use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\EventsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketsController;
use Illuminate\Http\Request;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;


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

Route::get('/forget-password', [ForgotPasswordController::class, 'getEmail']);
Route::post('/forget-password',  [ForgotPasswordController::class, 'postEmail']);
Route::post('/reset-password/{token}', [ResetPasswordController::class, 'getPassword']);
Route::post('/reset-password', [ResetPasswordController::class, 'updatePassword']);

Route::resource('tickets', TicketsController::class);

// Route::get('/tickets',[TicketsController::class, 'index']);
// Route::post('/tickets', [TicketsController::class, 'store']); 
// Route::post('/tickets', [TicketsController::class, 'show']);
// Route::post('/tickets', [TicketsController::class, 'update']);
// Route::post('/tickets', [TicketsController::class, 'destroy']);
