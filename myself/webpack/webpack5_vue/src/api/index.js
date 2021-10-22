import fetch from '@/axios/index'

/**获取用户列表 */
export function getUserActive(params) {
  return fetch("/index/user-active", params, "post")
}