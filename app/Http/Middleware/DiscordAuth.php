<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;

class DiscordAuth
{
    public function handle(Request $request, \Closure $next)
    {
        if (config('discord.api_key') === $request->bearerToken()) {
            return $next($request);
        }

        return response()->json([
            'status' => 403,
            'message' => 'Incorrect bearer token given.',
        ], 403);
    }
}
