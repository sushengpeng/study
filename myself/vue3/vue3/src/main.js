import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/style/reset.less'
import FastClick from 'fastclick'
import '../static/js/flexible.js'
import 'vant/lib/index.less'
import { Button } from "vant"
FastClick.attach(document.body)
const app = createApp(App)


app.use(store)
  .use(router)
  .use(Button)
  .mount('#app')
