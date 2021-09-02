import Vue from 'vue'
import App from './App.vue'
import router from "../src/router"

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
