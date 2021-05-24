<a
    href="{{ $link }}"
    class="
        flex w-full border-b border-gray-500 p-4 text-gray-200
        hover:bg-gray-600
        @if ($link === request()->url()) bg-gray-600 @else bg-gray-700 @endif
    "
>
    @isset($image)
        <img class="rounded-full w-8 h-8" src="{{ $image }}">
        <span class="w-auto px-4 py-1">
            {{ $label }}
        </span>
    @else
        <span class="w-auto">
            {{ $label }}
        </span>
    @endisset
</a>
