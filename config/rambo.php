<?php

use AngryMoustache\Rambo\Cards\WelcomeCard;
use AngryMoustache\Rambo\Rambo\Administrator;
use AngryMoustache\Rambo\Rambo\Attachment;
use App\Rambo\Tag;
use App\Rambo\Upload;

return [
    'resources' => [
        Administrator::class,
        Attachment::class,
        Upload::class,
        Tag::class,
    ],
];
