<?php

use App\Http\Controllers\Api\DeviantartController;
use App\Http\Controllers\Api\DiscordController;
use App\Http\Middleware\DiscordAuth;
use Illuminate\Support\Facades\Route;

Route::get('deviantart/page/{page?}', [DeviantartController::class, 'page'])
    ->name('api.deviantart.page');

Route::post('deviantart/add', [DeviantartController::class, 'add'])
    ->name('api.deviantart.add');

Route::middleware([DiscordAuth::class])->group(function () {
    Route::post('discord/upload', [DiscordController::class, 'upload']);
});
