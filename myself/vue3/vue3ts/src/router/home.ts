const home = [
  {
    path: "/index",
    name: "index",
    component: () => import(/* webpackChunkName: "about" */ '@/pages/index.vue')
  }
]
export default home;