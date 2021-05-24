<?php

use App\Http\Controllers\DeviantartController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RandomizeController;
use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [UploadController::class, 'index'])
    ->name('upload.index');

Route::get('/filter/{filter?}', [UploadController::class, 'index'])
    ->name('gallery.filter')
    ->where('filter', '.*');

Route::get('/logout', LogoutController::class)
    ->name('logout');

Route::get('/randomize', RandomizeController::class)
    ->name('randomize');

Route::get('/deviantart/pull/{id}', [DeviantartController::class, 'pull'])
    ->name('deviantart.pull');

Route::get('/deviantart/{page?}', [DeviantartController::class, 'index'])
    ->name('deviantart.index');
