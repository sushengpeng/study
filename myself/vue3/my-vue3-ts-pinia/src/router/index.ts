/*
 * @Autor: flygg123
 * @Date: 2022-06-24 09:15:04
 * @LastEditTime: 2022-07-19 14:43:06
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// import { markRaw } from "vue";
import { markRaw } from "vue";
import * as VueRouter from "vue-router";
import NProgress from "@/config/nprogress";
const layout = () => import("@/components/layout.vue")
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    component: markRaw(layout),
    children: [
      {
        path: "/about",
        name: "about",
        component: markRaw(import("@/views/about.vue")),
      },
    ],
  },

];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes, // `routes: routes` 的缩写
});
router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
});
router.afterEach((to) => {
  NProgress.done();
});

export default router;
