<?php

return [
    'auth-url' => 'https://www.deviantart.com/oauth2/token',
    'auth-body' => [
        'grant_type' => 'client_credentials',
        'client_id' => env('DEVIANTART_CLIENT_ID'),
        'client_secret' => env('DEVIANTART_CLIENT_SECRET'),
    ],

    'base-url' => 'https://www.deviantart.com/api/v1/oauth2',
    'favorites-folder' => 'C9FFE963-2644-C79E-B9FF-9E7AF6A0438D',
];
