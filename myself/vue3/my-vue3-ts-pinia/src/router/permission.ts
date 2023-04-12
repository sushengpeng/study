/* eslint-disable no-lonely-if */
import { useUserStore, useMenuStore } from '@/store'
import { AxiosCanceler } from '@/service/helper/axiosCancel'
import { Router } from 'vue-router'
import NProgress from '@/config/nprogress'
// import whiteList from '@/config/whiteList'
import { changeTitle } from '@/utils/changeLanguage'
import { initRouter, resetRouter } from './utils'
// 动态添加路由
export default class RouterPermission {
    static init(router: Router) {
        // 全局前置守卫：初始化时执行、每次路由切换前执行
        router.beforeEach(async (to, from, next) => {
            NProgress.start()
            next()
            return
            const userStore = useUserStore()
            const menuStore = useMenuStore()
            const axiosCanceler = new AxiosCanceler()
            // 在跳转路由之前，清除所有的请求
            axiosCanceler.removeAllPending()
            const { token } = userStore
            // 判断用户是否登录
            if (!token) {
                // 未登录重置动态路由列表
                menuStore.dynamicRoutes?.length && resetRouter(router)

                // 判断当前路由是否需要登录
                if (whiteList.includes(to.path)) return next() // 放行
                // 判断是否需要登录权限
                if (to.path.includes('/redirect/')) next()
                else next(`/login?redirect=${to.path}`)
                NProgress.done()
                return
            }
            // 已经登录过，访问login路径，重定向到首页
            if (to.path === '/login') {
                next({ path: '/' })
                NProgress.done()
                return
            }
            // 判断是否已经添加动态路由
            if (menuStore.dynamicRoutes && menuStore.dynamicRoutes.length) return next() // 放行
            // 如果没有用户信息第一步先获取用户信息, 再获取menu数据
            try {
                if (!userStore.userName) await userStore._getUserInfo()
                await initRouter(router)
                // ********************重要：解决动态路由页面刷新404问题*****************************
                if (to.path !== '/404' || !to.redirectedFrom) return next({ ...to, replace: true })
                router.replace(to.redirectedFrom.fullPath)
                next()
            } catch (error) {
                await userStore.resetToken()
                next(`/login?redirect=${to.path}`)
                NProgress.done()
            }
        })

        // 全局后置守卫：初始化时执行、每次路由切换后执行
        router.afterEach(to => {
            NProgress.done()
            // 设置页面title。防止路由跳转失败的可能，建议在路由切换完成后再设置title
            changeTitle(to.meta.title)
        })
    }

}
