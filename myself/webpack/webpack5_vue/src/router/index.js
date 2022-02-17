import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Index = () => import('../pages/index.vue')
const AxiosCancel = () => import('../pages/axiosCancel.vue')
const Drag = () => import('../pages/drag.vue')
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
    {
      path: '/axiosCancel',
      name: 'axiosCancel',
      component: AxiosCancel,
      meta: {
        title: '',
        keepAlive: true,
      }
    },
    {
      path: '/drag',
      name: 'drag',
      component: Drag,
      meta: {
        title: '',
        keepAlive: true,
      }
    },
  ]
})
export default router
