import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "reset.css"
// const componentList = require.context("./pages", false, /\.vue/)
// componentList.keys().forEach(filename => {
//   console.log(filename);
//   const reqCom = componentList(filename)
//   console.log(reqCom.default.routerData);
// });
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
