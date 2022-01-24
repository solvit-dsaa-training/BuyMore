<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::
Route::get('/forget-password', [ForgotPasswordController::class, 'getEmail']);
Route::post('/forget-password', [ForgotPasswordController::class, 'postEmail']);
Route::get('/reset-password/{token}', [ResetPasswordController::class, 'getPassword']);
Route::post('/reset-password', [ResetPasswordController::class, 'updatePassword']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
