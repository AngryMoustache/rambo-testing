<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static array fetch($id)
 * @method static array metadata($id)
 * @method static \Illuminate\Support\Collection favorites($page=null)
 */
class Deviantart extends Facade
{
    public static function getFacadeAccessor()
    {
        return 'deviantart';
    }
}
