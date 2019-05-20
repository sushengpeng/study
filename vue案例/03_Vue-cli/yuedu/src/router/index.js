// 引入Vue
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import routes from './routes'

const router = new Router({
  routes
})

// 设置导航守卫

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    // 判断是否有票
    const token = localStorage.getItem('token')
    if (token) {
      Vue.axios.post('/user/token').then(res => {
        if (res.data.res_code === 200) {
          next()
        }
      })
    } else {
      next('/login')
    }
    
    
  } else {
    next()
  }
}) 


export default router