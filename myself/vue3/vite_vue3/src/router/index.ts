import { createRouter, createWebHashHistory } from "vue-router"
const Index = () => import("../views/index.vue")
const Test = () => import("../views/test.vue")
const SetQrCode = () => import("../views/SetQrCode.vue")
const routes = [
  { path: '/', redirect: "/test" },
  { path: '/index', component: Index },
  { path: '/test', component: Test },
  { path: '/setQrCode', component: SetQrCode },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export default router;