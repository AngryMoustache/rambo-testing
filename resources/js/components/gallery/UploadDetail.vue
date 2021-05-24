<template>
  <div class="flex w-full flex-col">
    <div
      v-if="image"
      class="main-detail-image flex w-full bg-contain bg-center bg-no-repeat"
      :style="'flex: 1; background-image: url(\'' + image.src + '\')'"
    ></div>
    <div v-else
      class="flex loading border border-gray-800 bg-gray-800"
      style="flex: 1;"
    >
      <span></span>
    </div>

    <div
      v-if="variants.length > 0"
      class="flex justify-center w-full p-2 m-2 border-t border-gray-900"
    >
      <div
        v-for="(variant, key) in variants"
        :key="key"
        class="bg-cover bg-center h-24 w-24 mr-2 cursor-pointer hover:opacity-50 rounded"
        :class="{'opacity-25': (selected === key)}"
        :style="'background-image: url(\'' + variant.preview + '\')'"
        @click="viewVariant(key)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['upload'],
  data () {
    return {
      image: null,
      variants: [],
      selected: 0
    }
  },
  created () {
    let img = new Image()
    img.src = this.upload.image
    img.onload = () => this.image = img

    this.variants = []
    if (this.upload.variants.length !== 0) {
      this.variants = JSON.parse(JSON.stringify(this.upload.variants))
      this.variants.unshift({
        preview: this.upload.preview,
        image: this.upload.image
      })
    }
  },
  methods: {
    viewVariant (key) {
      const variant = this.variants[key]
      let img = new Image()

      this.image = null
      this.selected = key

      img.src = variant.image
      img.onload = () => this.image = img
    }
  }
}
</script>
