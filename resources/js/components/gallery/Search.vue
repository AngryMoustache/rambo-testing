<template>
  <div>
    <div class="flex w-full border-b border-gray-600 p-2 mb-2">
      <a
        class="pb-2 pt-3 px-2 border-gray-500 text-gray-400"
        href="/deviantart"
      >
        <i class="mr-2 fas fa-chevron-circle-down"></i>
      </a>

      <input
        class="flex w-full border p-2 border-gray-500 bg-gray-600 text-gray-400"
        type="text"
        v-model="search"
        placeholder="Search tags (enter to select)"
        v-on:keyup.enter="selectFirst()"
      >

      <i
        v-if="activeTags.length > 0"
        @click="$emit('reset')"
        class="
          rotate-hover
          fas fa-undo ml-3 mr-1 my-2 text-lg cursor-pointer self-center
          text-gray-400 hover:text-gray-300
        "
      ></i>
    </div>

    <div
      v-for="(option, key) in results.filter(item => item.count > 0)"
      :key="key"
    >
      <div
        class="w-full px-3 py-2 cursor-pointer hover:px-4"
        :class="{'bg-gray-700': activeTags.includes(option.slug)}"
        :style="'color:' + option.color"
        @click="toggleFilterTag(option)"
      >
        <i v-if="option.type === 'gallery'" class="fas fa-layer-group pr-1"></i>
        {{ option.name }}
        ({{ option.count }})
      </div>
    </div>

    <div class="border-b border-gray-600 p-2 mb-2 pt-0"></div>

    <div
      v-for="(option, key) in results.filter(item => item.count === 0)"
      :key="'0' + key"
    >
      <div
        class="w-full px-3 py-2 cursor-pointer opacity-50"
        :class="{'bg-gray-700': activeTags.includes(option.slug)}"
        :style="'color:' + option.color"
        @click="toggleFilterTag(option)"
      >
        <i v-if="option.type === 'gallery'" class="fas fa-layer-group pr-1"></i>
        {{ option.name }}
        ({{ option.count }})
      </div>
    </div>

    <div
      v-if="results.length === 0"
      class="w-full px-3 py-2 text-gray-400"
    >
      No tags found
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'filterRoute', 'activeTags'],
  data () {
    return {
      search: ''
    }
  },
  computed: {
    results () {
      if (this.search === '') {
        return this.options
      }

      return this.options.filter((item) => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
  methods: {
    toggleFilterTag (tag) {
      this.$emit('toggle-filter-tag', tag)
    },

    selectFirst () {
      if (this.results[0] && this.search !== '') {
        this.toggleFilterTag(this.results[0])
        this.search = ''
      }
    }
  }
}
</script>
