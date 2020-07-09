import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import flyTab from "./components/flyTab"
import flyTabItem from "./components/flyTab"
Vue.use(flyTab)
Vue.use(flyTabItem)
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
