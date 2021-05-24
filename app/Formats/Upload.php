<?php

namespace App\Formats;

use AngryMoustache\Media\Formats\Format;
use Spatie\Image\Image;

class Upload extends Format
{
    public static function render(Image $image)
    {
        return $image->crop('crop-center', 600, 600);
    }
}
