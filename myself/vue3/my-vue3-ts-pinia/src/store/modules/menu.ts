import { menuStore } from '@/store/interface/menuStore'
import { getMenu } from '@/service/api/menu'
import router, { constantRoutes } from '@/router'
import { filterAsyncRoutes, fiterconstantRouterMenu, routingSort } from './generateRoute'
export const useMenuStore = defineStore("menuStore", {
    state: (): menuStore => ({
        menu: [], // 后台返回的菜单数据
        dynamicRoutes: [], // 动态生成的路由
        menuView: [], // 页面渲染的菜单数据
        breadcrumbList: [] // 面包屑内容
    }),
    // 可以操作异步 和 同步提交state
    actions: {
        // 获取后台传过来的menu菜单
        async _getMenu() {
            this.menu = await getMenu()
            // 获取到后台数据以后，结合静态路由合成页面菜单显示的数据
            const routerMenu = fiterconstantRouterMenu(constantRoutes)
            // 将合并起来的菜单数据根据sort来重新排序
            this.menuView = routingSort([...this.menu, ...routerMenu])
        },
        // 生成路由数据
        generateRoutes(): Promise<any> {
            return new Promise((resolve) => {
                this.dynamicRoutes = filterAsyncRoutes(this.menu)
                resolve(this.dynamicRoutes)
            })
        },
        // 切换语言后重新获取当前语言的Menu数据
        changeMenuData() {
            // 如果面包屑中缓存的数据是不是动态路由的直接返回，不执行后续操作
            const find = this.dynamicRoutes.find(item => item.path === this.breadcrumbList[0].path)
            if (!find) return
            // 将动态路由的数据扁平化，找出和面包屑一样的数据，进行替换
            const routes = router.getRoutes()
            const arr = this.breadcrumbList.map(item => item.path)
            const res = routes.filter(item => (arr.includes(item.path))).reverse()
            this.breadcrumbList.forEach((item, index) => {
                item.meta.title = res[index].meta.title
            })
        }
    }
})
