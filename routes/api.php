<?php

use App\Http\Controllers\Api\DeviantartController;
use Illuminate\Support\Facades\Route;

Route::get('deviantart/page/{page?}', [DeviantartController::class, 'page'])
    ->name('api.deviantart.page');

Route::post('deviantart/add', [DeviantartController::class, 'add'])
    ->name('api.deviantart.add');
