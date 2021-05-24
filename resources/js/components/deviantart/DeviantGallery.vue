<template>
  <div v-if="loaded">
    <div class="w-full text-center">
      <a
        v-if="currentPage > 1"
        class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
        @click="previousPage()"
      >
        Previous page
      </a>

      <input
        type="number"
        v-model="currentPage"
        @change="fetch"
      >

      <a
        v-if="hasMore"
        class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
        @click="nextPage()"
      >
        Next page
      </a>
    </div>

    <div class="
      grid grid-square
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    ">
      <template v-for="(item, key) in items">
        <deviantion
          v-if="item.content"
          :key="key"
          :item="item"
          :add-url="addUrl"
        ></deviantion>
      </template>
    </div>

    <div class="w-full text-center">
      <a
        v-if="currentPage > 1"
        class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
        @click="previousPage()"
      >
        Previous page
      </a>

      <input
        type="number"
        v-model="currentPage"
        @change="fetch"
      >

      <a
        v-if="hasMore"
        class="inline-block text-gray-300 px-4 py-8 cursor-pointer"
        @click="nextPage()"
      >
        Next page
      </a>
    </div>
  </div>

  <div v-else
    class="flex loading border border-gray-800 bg-gray-800"
    style="flex: 1;"
  >
    <span></span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['page', 'url', 'addUrl'],
  data () {
    return {
      currentPage: null,
      items: [],
      loaded: false,
      hasMore: false,
    }
  },
  async created () {
    this.currentPage = parseInt(this.page)
    await this.fetch()
  },
  methods: {
    async fetch () {
      this.loaded = false
      axios.get(this.url + '/' + this.currentPage).then((response) => {
        this.items = response.data.items
        this.hasMore = response.data.has_more
        this.loaded = true
      })
    },
    async previousPage () {
      this.currentPage = parseInt(this.currentPage) - 1
      this.fetch()
    },
    async nextPage () {
      this.currentPage = parseInt(this.currentPage) + 1
      this.fetch()
    }
  }
}
</script>
