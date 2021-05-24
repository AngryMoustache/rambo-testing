<?php

namespace App\Http\Controllers;

use App\Auth;
use App\Http\Resources\UploadResource;
use App\Models\Tag;
use App\Models\Upload;

class UploadController extends Controller
{
    public function index($filter = null)
    {
        $uploads = Upload::with('attachment')->get();

        return view('uploads.index', [
            'uploads' => UploadResource::collection($uploads),
            'filters' => parse_filters($filter),
            'tags' => Tag::getSearchList(),
        ]);
    }
}
