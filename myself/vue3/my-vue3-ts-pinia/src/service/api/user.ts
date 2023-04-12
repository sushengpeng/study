import http from '@/service/request'

/**
     * 获取菜单
     * @returns  Menu[]
     */
export function login (data: LoginData) {
    return http.post<IToken>('/api/user/login', data, { showLoading: false })
}
export function getUserInfo () {
    return http.post<{userInfo: UserInfo}>('/api/user/getUserInfo')
}
