import { fetch } from "../utils/request"
export function getProduct(params: any) {
  return fetch({ requestUrl: 'api/index/products', method: "GET", params })
}