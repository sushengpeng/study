import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from "./home"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/index"
  },
  ...home
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
