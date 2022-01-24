<?php

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
    //code

    // only admin routes
    Route::middleware('admin')->prefix('admin')->group(function(){
        //code
    });

    // only client routes
    Route::middleware('client')->prefix('dashboard')->group(function(){
        //code
    });

    // only normal users routes
    Route::middleware('user')->group(function(){
        //code
    });
});

Route::post('login', [UserApiController::class,'login']);

