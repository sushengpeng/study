import request from "@/utils/request"

export function getList(params){
  return request({
    url: "/getList",
    method: "post",
    params
  })
}