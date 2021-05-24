<div class="container my-8 mx-auto">
    <a
        class="w-full inline-block text-center p-2 border-gray-500 text-gray-400"
        href="/"
    >
        < Back to the PerilVault
    </a>

    <div wire:loading.remove wire:target="newPage" class="w-full text-center">
        <a
            class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
            wire:click="newPage({{ $page - 1 }})"
        >
            Previous page
        </a>
        <a class="inline-block text-gray-300">< {{ $page }} ></a>
        <a
            class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
            wire:click="newPage({{ $page + 1 }})"
        >
            Next page
        </a>
    </div>

    <div wire:loading.remove wire:target="newPage" class="
        grid grid-square
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    ">
        @foreach (($results['items'] ?? []) as $key => $item)
            <div class="m-2">
                <a
                    class="grid-image block border border-gray-800 overflow-hidden bg-center bg-cover"
                    style="background-image: url('{{ $item->getImage() }}')"
                ></a>

                <div class="flex bg-gray-700 text-center text-gray-300">
                    <a
                        href="{{ $item->getImage() }}"
                        target="_blank"
                        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
                    >
                        <i class="far fa-eye"></i>
                    </a>
                    <a
                        href="{{ $item->getLink() }}"
                        target="_blank"
                        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
                    >
                        <i class="fab fa-deviantart"></i>
                    </a>
                    <a
                        href="{{ route('deviantart.pull', $item->deviationid) }}"
                        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
                    >
                        <i class="fas fa-chevron-circle-down"></i>
                    </a>
                </div>
            </div>
        @endforeach
    </div>

    <div wire:loading.remove wire:target="newPage" class="w-full text-center">
        <a
            class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
            wire:click="newPage({{ $page - 1 }})"
        >
            Previous page
        </a>
        <a class="inline-block text-gray-300">< {{ $page }} ></a>
        <a
            class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
            wire:click="newPage({{ $page + 1 }})"
        >
            Next page
        </a>
    </div>

    <div wire:loading wire:target="newPage">
        <div v-else
            class="flex loading border border-gray-800 bg-gray-800"
            style="flex: 1;"
        >
            <span></span>
        </div>
    </div>
</div>
