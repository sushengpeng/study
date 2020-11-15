import request from '../utils/request'
export default function getSecondKillProduct(methods,params){
  return request("/second-kill/get-second-kill-product",methods,params)
}