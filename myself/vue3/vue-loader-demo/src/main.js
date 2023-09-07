import { createApp } from 'vue'
import App from './App.vue'
import initDom from './utils/position'
initDom()
createApp(App).mount('#app')
