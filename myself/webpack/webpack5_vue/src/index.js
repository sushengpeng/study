import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "reset.css"
if (process.env.MOCK) {    // 判断是否为mock模式
  console.log(112221)
  require('./mock/index.js')
}

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use(Vuex)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
