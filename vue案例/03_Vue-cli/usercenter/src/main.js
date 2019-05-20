import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'
import store from './store/index'
Vue.config.productionTip = false
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000"

Vue.prototype.axios = axios
Vue.axios = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
