import http from '@/service/request'

/**
     * 获取菜单
     * @returns  Menu[]
     */
export const getMenu = () => http.post<Menu[]>('/api/getMenu')

