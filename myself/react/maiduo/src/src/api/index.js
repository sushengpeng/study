import request from '../utils/request'

//获取首页banner
export function getIndexBanner(params){
  return request("/index/get-banners",params,"post")
}
//获取秒杀
export function getSecondKillProduct(params){
  return request("/second-kill/get-second-kill-product",params,"post")
}
/**获取用户列表 */
export function getUserActive(params) {
  return request("/index/user-active", params, "post")
}
//获取首页icon
export function getIconList(params) {
  return request("/index/new-index-icon", params, "post")
}
//获取最新广告
export function getNewList(params) {
  return request("/index/get-new-advert", params, "post")
}
//获取最新广告
export function getNewsAndTuan(params) {
  return request("/index/get-news-and-tuan", params, "post")
}