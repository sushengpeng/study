import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Index = () => import('../pages/index.vue')
let router = new Router({
  routes: [
    {
      path:"/",
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        title: '',
        keepAlive: true,
      }
    },
  ]
})
export default router
