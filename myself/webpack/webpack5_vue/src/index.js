
/*eslint-disable*/
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import "reset.css"
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})