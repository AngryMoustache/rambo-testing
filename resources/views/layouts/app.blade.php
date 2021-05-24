<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name') }}</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script src="https://kit.fontawesome.com/989b502037.js" crossorigin="anonymous"></script>
        @yield('styles')
        @livewireStyles
    </head>

    <body class="bg-gray-900">
        @yield('body')
    </body>

    <script src="{{ asset('js/app.js') }}"></script>
    @yield('scripts')
    @livewireScripts
</html>
