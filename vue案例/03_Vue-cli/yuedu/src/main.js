import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

// 引入样式
import './assets/css/reset.css'
import './assets/font/iconfont.css'
Vue.config.productionTip = false

// axios.defaults.baseURL = "http://localhost:8080/api"

// 判断启动的环境是什么环境 development production
/* 
  process.env.NODE_ENV
    npm run serve 时这个值是 development
    npm run build 时这个值是 production
  因此我们可以判断如果是development则 设置接口地址为 开发环境的接口地址 如果是production则设置环境为生产环境的接口地址

  axios.defaults.baseURL = process.env.NODE_ENV === "development" ? '开发环境接口' : '生产环境接口'
  
*/
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:8080/api' : 'http://localhost:3000/api'

axios.interceptors.request.use(config => {

  const token = localStorage.getItem('token')
  if (token) {
    // 在发出请求前，给所有请求的头部都添加token
    config.headers.common['Authorization'] = "Bearer " + token
  }
  
  return config
})

axios.interceptors.response.use(res => {
  console.log("拦截器中执行的代码")
  // 判断res.data.res_code 是否是401 如果是则跳转到登录，如果不是则正常返回
  if (res.data.res_code === 401) {
    router.push('/login')
    // 删除token以及user
    localStorage.removeItem('user')
    localStorage.removeItem('token')

  }
  
  return res
})

Vue.prototype.axios = axios
Vue.axios = axios



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
