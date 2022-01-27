<?php

use App\Http\Controllers\Api\SponsorsController;
use App\Http\Controllers\Api\TicketsController;
use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\EventsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
        Route::get('events',[EventsController::class,'index']);
        Route::get('events/{event}/view',[EventsController::class,'show']);
        Route::put('events/{event}/mark-as-complete',[EventsController::class,'markAsComplete']);
        Route::put('events/{event}/Cancel',[EventsController::class,'cancel']);
        Route::put('events/{event}/Approve',[EventsController::class,'approve']);
        Route::delete('events/{event}/delete',[EventsController::class,'destroy']);
    });

    // only client routes
    Route::middleware('client')->prefix('dashboard')->group(function(){
        Route::put('events/{event}/update',[EventsController::class,'update']);
        Route::get('events/{event}/view',[EventsController::class,'show']);
        Route::post('register-event',[EventsController::class,'store']);
        Route::post('events/{event}/sponsor/add',[SponsorsController::class,'store']);
        Route::delete('events/sponsors/{sponsor}/delete',[EventsController::class,'delete']);
        Route::get('tickets',[TicketsController::class,'index']);
        Route::post('tickets/add-new-ticket',[TicketsController::class,'store']);
        Route::get('tickets/{ticket}/view',[TicketsController::class,'show']);
        Route::put('tickets/{ticket}/update',[TicketsController::class,'update']);
        Route::delete('tickets/{ticket}/delete',[TicketsController::class,'destroy']);
    });

    // only normal users routes
    Route::middleware('user')->group(function(){
        
    });
});

Route::post('register',[UserApiController::class,'register']);
Route::post('login', [UserApiController::class,'login']);

