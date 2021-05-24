<template>
  <div
    class="m-2"
    @click="$emit('select', upload)"
  >
    <a
      v-if="loaded"
      class="grid-image block border border-gray-800 overflow-hidden bg-cover cursor-pointer"
      :style="'background-image: url(\'' + upload.preview + '\')'"
    ></a>
    <div v-else class="loading border border-gray-800 bg-gray-800">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['upload'],
  data () {
    return {
      loaded: false,
    }
  },
  created () {
    let img = new Image()
    img.src = this.upload.preview
    img.onload = () => this.loaded = true
  }
}
</script>
