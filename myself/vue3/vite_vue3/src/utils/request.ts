import axios, { AxiosRequestConfig } from 'axios'
// export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变//量process.env中
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一
// axios 跨域请求携带 cookie
axios.defaults.withCredentials = true
axios.defaults.timeout = 300000
// 封装请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 发起一个请求
 * @param requestParams
 */
export async function fetch(requestParams: RequestParams) {
  const { method, requestUrl, params } = requestParams
  const sendData: AxiosRequestConfig = {
    url: requestUrl,
    method,
  }

  if (method === 'GET') {
    sendData.params = params
  } else {
    sendData.data = params
  }

  return axios(sendData)
    .then(res => {
      const data: any = res.data
      if (res.status == 200) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
    .catch(async err => {
      // await errorAction(err, sendData, options)
      return Promise.reject({ ...err, sendData, resData: err })
    })
}

/** - interface - split ------------------------------------------------------------------- */

declare global {
  /**
   * 网络请求参数
   */
  interface RequestParams {
    /** 基本 url, 没有特殊需求无需传递 */
    requestUrl: string
    params: object
    /** 请求类型: [POST | GET] 默认: POST */
    method?: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH'
    /** 是否显示loading */
    isLoading?: boolean
    /** 是否显示toast */
    isToast?: boolean
    loadingText?: boolean
  }

  /**
   * 网络请求返回值
   */
  interface RequestRes {
    /** 状态码,成功返回 200 */
    code: number
    /** 错误消息 */
    message: string
    /** 返回数据 */
    data: any
  }

}