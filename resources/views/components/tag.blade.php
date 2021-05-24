<a
    class="inline-block border rounded mr-2 mb-2 py-1 px-2 hover:bg-gray-700 cursor-pointer"
    style="
        color: {{ $tag['color'] }};
        border-color: {{ $tag['color'] }};
    "
    wire:click="selectTag('{{ json_encode($tag) }}')"
>
    @if ($tag['new'] ?? false)
        <i class="fas fa-exclamation mx-1"></i>
    @endif
    {{ $tag['name'] }}
</a>
