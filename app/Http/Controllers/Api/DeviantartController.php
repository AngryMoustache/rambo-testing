<?php

namespace App\Http\Controllers\Api;

use App\Facades\Deviantart;
use App\Http\Controllers\Controller;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DeviantartController extends Controller
{
    public function page($page)
    {
        return Deviantart::fetchFavorites($page, 20);
    }

    public function add(Request $request)
    {
        $data = $request->all();
        $details = Deviantart::fetchDeviant($data['deviationid']);

        $upload = new Upload([
            'name' => $data['title'],
            'description' => $details['metadata'][0]['description'] ?? null,
            'slug' => Str::slug($data['title']),
            'link' => $data['url'],
            'attachment_id' => Upload::uploadFromUrl($data['content']['src'], $data['title'])->id,
            'online' => 1
        ]);

        $upload->save();
    }
}
