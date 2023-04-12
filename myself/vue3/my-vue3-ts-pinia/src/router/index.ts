/*
 * @Autor: flygg123
 * @Date: 2022-06-24 09:15:04
 * @LastEditTime: 2023-04-12 15:48:51
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// import { markRaw } from "vue";
import { markRaw } from "vue";
import * as VueRouter from "vue-router";
import { Router } from 'vue-router'
import NProgress from "@/config/nprogress";
import { changeTitle } from '@/utils/changeLanguage'
const layout = () => import("@/components/layout.vue")
declare module 'vue-router' {
  interface RouteMeta {
    title: string, // 标题
    requireAuth?: boolean, // 是否验证登录
    breadcrumb?: boolean // 是否在面包屑中展示
    tagsView?: boolean // 是否在tagsView中显示
    isShow?: boolean // 是否在左侧Menu菜单中显示
    icon?: string // 菜单中显示的标题
    sort?: number // 路由在菜单中显示的顺序
  }
}
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
      {
        path: "/index",
        name: "index",
        component: markRaw(import("@/views/index.vue")),
      },
    ],
  },
  {
    path: "/login",
    component: markRaw(import("@/views/login.vue")),
    meta: {
      title: "common.title",
    }
  },
  {
    path: "/excel",
    component: markRaw(import("@/views/excel.vue")),
    meta: {
      title: "excel"
    }
  }
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
router.afterEach(to => {
  NProgress.done();
  changeTitle(to.meta.title)
});

export default router;
