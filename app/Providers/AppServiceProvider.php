<?php

namespace App\Providers;

use App\Deviantart;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('deviantart', Deviantart::class);
    }

    public function boot()
    {
        //
    }
}
