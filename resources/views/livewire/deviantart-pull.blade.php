<div class="container my-8 mx-auto">
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 px-8">
            <img src="{{ $item['content']['src'] }}">
        </div>

        <div class="w-full md:w-2/3 p-8 md:p-0">
            <h1 class="text-gray-300 text-3xl">{{ $item['title'] }}</h1>
            <h2 class="text-gray-600 text-xl pb-4">Pulling from DeviantArt</h2>

            <h3 class="text-gray-300 text-xl pb-2">Selected tags</h3>
            @forelse ($selectedTags as $tag)
                <x-tag :tag="$tag" />
            @empty
                <p class="text-gray-600 pb-4">Empty</p>
            @endforelse

            <h3 class="text-gray-300 text-xl pt-2 pb-2">Select tags</h3>
            <div class="w-full">
                @forelse ($tags as $tag)
                    @if (! in_array($tag, $selectedTags))
                        <x-tag :tag="$tag" />
                    @endif
                @empty
                    <p class="text-gray-600 pb-4">Empty</p>
                @endforelse
            </div>

            <a wire:click="pull" class="
                inline-block rounded text-lg font-semibold mt-6 py-2 px-4 cursor-pointer
                bg-gray-800 text-gray-400
                hover:bg-gray-700
            ">
                Pull to PerilVault
                <i class="ml-2 fas fa-chevron-circle-down"></i>
            </a>

            <a wire:click="cancel" class="
                inline-block text-lg font-semibold mt-6 py-2 px-4 cursor-pointer
                text-gray-600
                hover:opacity-75
            ">
                Cancel
            </a>
        </div>
    </div>
</div>
