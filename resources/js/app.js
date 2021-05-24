import Vue from 'vue'

Vue.component('deviantion', require('./components/deviantart/Deviantion.vue').default)
Vue.component('deviant-gallery', require('./components/deviantart/DeviantGallery.vue').default)
Vue.component('gallery', require('./components/gallery/Gallery.vue').default)
Vue.component('modal', require('./components/gallery/Modal.vue').default)
Vue.component('search', require('./components/gallery/Search.vue').default)
Vue.component('upload', require('./components/gallery/Upload.vue').default)
Vue.component('upload-detail', require('./components/gallery/UploadDetail.vue').default)

const $vueContainers = document.querySelectorAll('.js-vue')
if ($vueContainers) {
  for (let i = 0; i < $vueContainers.length; i++) {
    new Vue({ el: $vueContainers[i] })
  }
}
