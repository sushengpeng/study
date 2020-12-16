import request from '../utils/request'

//获取首页banner
export function getIndexBanner(params){
  return request("/index/get-banners",params,"post")
}
//获取秒杀
export function getSecondKillProduct(params){
  return request("/second-kill/get-second-kill-product",params,"post")
}