<?php
use App\Http\Controllers\TicketsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
