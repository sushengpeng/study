import { RouteRecordRaw, RouteLocationMatched } from 'vue-router'
export interface menuStore {
    menu: Menu[],
    dynamicRoutes: RouteRecordRaw[],
    menuView: Menu[],
    breadcrumbList: RouteLocationMatched[]
}
