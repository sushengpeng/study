import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to,from,next)=>{
  if(to.matched.some(route => route.meta.status)){
    if(localStorage.getItem('ticket')){
      next()
    }else{
      next('/ticket?returnUrl='+to.path)
    }
  }else{
    next()
  }
  // console.log(to.meta.status,from.meta.status)
})
new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
