import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);
import home from "./home";
const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/index",
  },
  ...home,
];

const router = new VueRouter({
  routes,
});

export default router;
