<template>
  <div>
    <div class="
      bg-gray-800 border-r border-gray-500
      w-full md:w-56 lg:w-64 xl:w-80
      md:h-full
      block md:fixed
      overflow-auto
      border-b md:border-b-0
    ">
      <search
        :filter-route="filterRoute"
        :options="tags"
        :active-tags="activeTags"
        @toggle-filter-tag="toggleFilterTag"
        @reset="resetFilters"
      />
    </div>

    <modal
      v-if="modal"
      :upload="modal"
      :tags="tags"
      @close="modal = null"
    />

    <div class="w-auto ml-0 md:ml-56 lg:ml-64 xl:ml-80 p-2">
      <div
        v-if="filteredUploads.length === 0"
        class="w-full lg:w-1/2 my-8 mx-auto relative text-center"
      >
        <img
          :src="'/img/404-' + (Math.floor(Math.random() * 3) + 1) + '.png'"
          class="w-2/3 mx-auto opacity-50"
        >

        <div class="
          absolute bottom-0 p-4 left-0 right-0 mx-auto
          bg-gray-800 border border-gray-900
          w-2/3
        ">
          <h1 class="text-2xl text-gray-300 mb-2">Nothing here</h1>
          <h2 class="text-lg text-gray-400">You might have enabled too many tags</h2>
          <p
            @click="resetFilters"
            class="
              cursor-pointer
              inline-block border rounded text-lg font-semibold mx-2 mt-4 py-2 px-4
              bg-gray-900 text-gray-400 border-gray-900
              hover:bg-gray-700
          ">
            Reset filters
          </p>
        </div>
      </div>

      <div class="
        grid grid-square
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      ">
        <upload
            v-for="(upload, key) in filteredUploads"
            :key="key"
            :upload="upload"
            @select="selectUpload"
        ></upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['uploads', 'tags', 'filters', 'filterRoute'],
  data () {
    return {
      activeTags: [],
      modal: null,
    }
  },
  mounted () {
    this.activeTags = this.filters.tag || []
  },
  computed: {
    filteredUploads () {
      let uploads = this.uploads.filter(upload => this.checkTags(upload))

      this.tags.forEach(tag => {
        tag.count = 0
        uploads.forEach(upload => {
            if (upload.tags.includes(tag.slug)) {
              tag.count++
            }
        })
      })

      this.tags = this.tags.sort((a,b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      }).sort((a, b) => {
        return b.count - a.count
      })

      return uploads
    }
  },
  methods: {
    toggleFilterTag (tag) {
      var index = this.activeTags.indexOf(tag.slug);
      if (index === -1) {
          this.activeTags.push(tag.slug);
      } else {
          this.activeTags.splice(index, 1);
      }

      this.buildUrl()
    },

    checkTags (upload) {
      if (this.activeTags === undefined) return true

      let ok = true
      this.activeTags.forEach(filter => {
        if (! upload.tags.includes(filter)) ok = false
      });

      return ok
    },

    selectUpload (upload) {
      this.modal = upload
    },

    resetFilters () {
      this.activeTags = []
      this.buildUrl()
    },

    buildUrl () {
      if (this.activeTags.length === 0) {
        window.history.pushState('/', 'Peril Vault', '/')
        return
      }

      let url = this.filterRoute + '/tag:' + this.activeTags.join(',')
      window.history.pushState('/', 'Peril Vault', url)
    }
  }
}
</script>
