<template>
  <div class="modal">
    <div class="flex modal-content bg-gray-800 border border-gray-900 p-4">
      <div
        class="
          flex w-full border border-gray-800 bg-cover
          flex-wrap
        "
      >
        <div class="relative flex w-full lg:w-1/2 p-1 sm:p-4">
          <upload-detail :upload="upload" />
        </div>

        <div class="w-full lg:w-1/2 px-1 pb-4 sm:px-4 sm:relative">
          <span
            class="absolute right-4 top-2 px-1 rounded block bg-gray-800"
            @click="$emit('close')"
          >
            <i class="fa fa-times cursor-pointer p-2 text-2xl text-gray-300"></i>
          </span>

          <h1 class="text-3xl text-gray-400 p-2">
            {{ upload.name }}
          </h1>

          <div class="flex flex-wrap">
            <a
              v-for="tag in upload.tags"
              :key="tag"
              class="border rounded m-2 py-1 px-2 hover:bg-gray-700"
              :style="'color: ' + tagList[tag].color + '; border-color:' + tagList[tag].color"
              :href="'/filter/tag:' + tag"
            >
              {{ tagList[tag].name }}
            </a>
          </div>

          <p
            v-if="upload.description"
            class="text-gray-400 mt-4 mb-2 px-3"
            v-html="upload.description"
          ></p>

          <div
            v-if="upload.youtube"
            class="w-full p-2 mb-4"
          >
            <iframe
                class="w-full rounded" height="50%"
                :src="'https://www.youtube.com/embed/' + upload.youtube"
                frameborder="0"
                allowfullscreen
            ></iframe>
          </div>

          <a
            v-if="upload.has_link"
            :href="upload.link"
            target="_blank"
            class="
              inline-block border rounded text-lg font-semibold mx-2 mt-4 py-2 px-4
              bg-gray-900 text-gray-400 border-gray-900
              hover:bg-gray-700
          ">
            Source
            <i class="ml-2 fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['upload', 'tags'],
  data () {
    return {
      tagList: {}
    }
  },
  created () {
    this.tags.forEach(tag => {
      this.tagList[tag.slug] = tag
    })
  }
}
</script>
