<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DiscordController extends Controller
{
    public function upload(Request $request)
    {
        $data = $request->input('data');

        $upload = new Upload([
            'name' => $data->title,
            'slug' => Str::slug($data->title),
            'attachment_id' => Upload::uploadFromUrl($data->image, $data->title)->id,
            'online' => 1
        ]);

        $upload->save();

        return response()->json([
            'message' => 'Upload successful: ' . config('app.url') . '/admin/pulls/' . $upload->id,
            'status' => 200,
        ], 200)
    }
}
