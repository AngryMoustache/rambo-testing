<template>
  <div class="m-2">
    <a
      v-if="loaded"
      class="block border border-gray-800 overflow-hidden bg-center bg-cover"
      :style="'background-image: url(\'' + image + '\')'"
    ></a>
    <div v-else class="loading border border-gray-800 bg-gray-800">
      <span></span>
    </div>

    <div class="flex bg-gray-700 text-center text-gray-300">
      <span
        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
        @click="openLink(image)"
      >
        <i class="far fa-eye"></i>
      </span>
      <span
        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
        @click="openLink(link)"
      >
        <i class="fab fa-deviantart"></i>
      </span>
      <span
        class="inline-block w-1/2 p-2 cursor-pointer hover:opacity-50"
        @click="addToCollection(image)"
      >
        <i class="fa fa-plus"></i>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['item', 'addUrl'],
  data () {
    return {
      loaded: false,
    }
  },
  created () {
    this.image = this.item.content.src
    this.link = this.item.url

    let img = new Image()
    img.src = this.image
    img.onload = () => this.loaded = true
  },
  methods: {
    openLink (to) {
      window.open(to)
    },

    addToCollection () {
      axios.post(this.addUrl, this.item)
    }
  }
}
</script>
