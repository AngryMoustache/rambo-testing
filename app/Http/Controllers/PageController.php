<?php

namespace App\Http\Controllers;

use App\Models\Page;

class PageController extends Controller
{
    public function __invoke(Page $page)
    {
        return view('page.show', [
            'page' => $page,
        ]);
    }
}
