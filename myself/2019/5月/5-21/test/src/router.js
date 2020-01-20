import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/park',
      name:'park',
      meta:{
        status:false
      },
      component:()=>import(/* webpackChunkName: "park" */'./views/Park.vue')
    },
    {
      path:'/ticket',
      name:'ticket',
      component:()=>import(/* webpackChunkName: "ticket" */'./views/Ticket')
    },
    {
      path:'/zoo',
      name:'zoo',
      meta:{
        status:true
      },
      component:()=>import(/* webpackChunkName: "park" */'./views/Zoo.vue'),
      children:[
        {
          path:'monkey',
          name:'monkey',
          meta:{
            status:true
          },
          component:()=>import(/* webpackChunkName: "park" */'./views/Monkey.vue')
        }
      ]
    }
  ]
})

