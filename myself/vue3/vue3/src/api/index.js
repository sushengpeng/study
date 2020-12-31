import fetch from '@/axios/index'


/**获取用户列表 */
export function getUserActive(params) {
  return fetch("/index/user-active", params, "post")
}
//获取首页banner
export function getBanner(params) {
  return fetch("/index/get-banners", params, "post")
}
//获取首页icon
export function getIconList(params) {
  return fetch("/index/new-index-icon", params, "post")
}
//获取最新广告
export function getNewList(params) {
  return fetch("/index/get-new-advert", params, "post")
}