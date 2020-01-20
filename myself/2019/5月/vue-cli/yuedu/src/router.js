import Vue from 'vue'
import Router from 'vue-router'
import Channel from './views/Channel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/channel/1',//设置默认指向的路径
      component: Channel
    },
    {
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Article.vue')
    },
    {
      path:'/channel/:id',
      component:()=>import('./views/Channel')
    }
  ]
})
