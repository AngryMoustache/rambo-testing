<?php

namespace App\Http\Controllers;

use App\Auth;

class DeviantartController extends Controller
{
    public function index($page = 1)
    {
        if (! Auth::user()) {
            return view('auth.login');
        }

        session(['deviantart-page' => $page]);

        return view('deviantart.index', [
            'page' => $page,
        ]);
    }

    public function pull($id)
    {
        if (! Auth::user()) {
            return view('auth.login');
        }

        return view('deviantart.pull', [
            'id' => $id,
        ]);
    }
}
