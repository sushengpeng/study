import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "reset.css"

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
