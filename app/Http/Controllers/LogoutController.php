<?php

namespace App\Http\Controllers;

use App\Auth;

class LogoutController extends Controller
{
    public function __invoke()
    {
        Auth::logout();
        return redirect(route('upload.index'));
    }
}
