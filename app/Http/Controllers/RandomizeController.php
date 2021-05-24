<?php

namespace App\Http\Controllers;

use App\Auth;
use App\Models\Tag;

class RandomizeController extends Controller
{
    public function __invoke()
    {
        if (! Auth::user()) {
            return view('auth.login');
        }

        $list = Tag::get()->groupBy('color')->map(function ($tags) {
            return $tags->random();
        })->values();

        return view('randomize.index', [
            'list' => $list
        ]);
    }
}
