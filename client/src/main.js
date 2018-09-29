// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'



Vue.use(VueYouTubeEmbed)


sync(store, router)

Vue.use(Vuetify,{
  iconfont: 'mdi' ,   icons: {
    'cancel': 'fas fa-ban',
    'menu': 'menu',
    'add': 'add',
    'edit':'edit',
    'arrow_forward' : 'arrow_forward'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
