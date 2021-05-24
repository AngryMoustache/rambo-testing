<?php

namespace App\Models\Traits;

trait HasSlug
{
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
