@extends('layouts.app')

@section('body')
    <div class="w-1/3 mx-auto my-8 text-center">
        <h1 class="text-gray-300 border-b border-gray-600 pb-2 mb-6 text-3xl font-semibold">
            RANDOMIZER
        </h1>

        <ul>
            @foreach ($list as $item)
                <li
                    class="text-2xl py-2"
                    style="color: {{ $item->color }}"
                >
                    {{ $item->name }}
                </li>
            @endforeach
        </ul>

        <div class="border-t border-gray-600 mt-8">
            <a
                href="{{ route('randomize') }}"
                class="
                    inline-block border rounded text-3xl font-semibold mt-8 py-2 px-6
                    bg-gray-800 text-gray-400 border-gray-800
                    hover:bg-gray-700
                "
            >
                RETRY
            </a>
        </div>
    </div>
@endsection
