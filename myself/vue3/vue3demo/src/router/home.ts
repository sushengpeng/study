const routes = [
  {
    path: "index",
    name: "index",
    component: () => import(/* webpackChunkName: "index" */ "@/pages/index.vue"),
  },
];
export default routes;
