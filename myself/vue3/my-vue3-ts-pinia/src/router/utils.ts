import { Router, RouteRecordRaw } from 'vue-router'
import { useMenuStore } from '@/store'
// 初始化路由
export function initRouter(router: Router) {
    const menuStore = useMenuStore()
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<void>( async(resolve) => {
        // 1. 获取后台菜单数据
        await menuStore._getMenu()
        // 2. 生成动态的路由数据
        const accessRoutes: RouteRecordRaw[] = await menuStore.generateRoutes()
        // 生成路由
        accessRoutes.forEach(item => {
            router.addRoute(item)
        })
        resolve()
    })
}
// 重置路由
export async function resetRouter(router: Router) {
    const menuStore = useMenuStore()
    // 清除动态路由表中的路由
    await menuStore.dynamicRoutes.forEach(route => {
        const { name } = route
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
    // 重置路由以后清空动态路由列表
    menuStore.dynamicRoutes = []
}
