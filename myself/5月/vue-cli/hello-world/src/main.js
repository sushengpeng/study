import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('login')){
    next()
  }else{
    if(to.query.tab=='good'){
    
      next('/login?returnUrl='+to.fullPath)
      // console.log(this.$route)
    }else{
      next()
    }
  }
  // next()
  // console.log(to.query.tab,from.query.tab)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
