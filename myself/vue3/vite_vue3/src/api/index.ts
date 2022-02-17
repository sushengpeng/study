import { fetch } from "../utils/request"
export function getProduct(params: any) {
  return fetch({ requestUrl: 'index/products', method: "GET", params })
}