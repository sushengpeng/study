import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import home from "./home";
const routes = [
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