<template>
  <div class="modal">
    <div class="flex modal-content bg-gray-800 border border-gray-900 p-4">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
