import { createRouter, createWebHashHistory } from 'vue-router';
import home from "./home";
const routes = [
    {
        path: '/',
        redirect: "/index"
    },
    ...home
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map