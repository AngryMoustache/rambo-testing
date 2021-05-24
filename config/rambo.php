<?php

use AngryMoustache\Rambo\Cards\WelcomeCard;
use AngryMoustache\Rambo\Rambo\Administrator;
use AngryMoustache\Rambo\Rambo\Attachment;
use App\Rambo\Page;
use App\Rambo\Tag;
use App\Rambo\Upload;

return [
    'resources' => [
        Administrator::class,
        Attachment::class,
        Page::class,
        Upload::class,
        Tag::class,
    ],

    // 'resources' => [
    //     Administrator::class,
    //     'Website' => [
    //         Attachment::class,
    //         Page::class,
    //     ],
    //     'Uploads' => [
    //         Upload::class,
    //         'Tags' => [
    //             Tag::class,
    //         ],
    //     ],
    // ],
];
