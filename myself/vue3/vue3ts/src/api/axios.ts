import axios, { AxiosRequestConfig } from 'axios'
// import path from 'path'
// import { errorAction } from './handle-response'
export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中
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

// 默认传递的参数
const DEFAULT_PARAMS = {}

/**
 * 发起一个请求
 * @param requestParams
 */
export async function fetch(requestParams: RequestParams) {
  const options: RequestOptions = Object.assign({}, DEFAULT_CONFIG, optionsSource)
  const { method, requestUrl, headers, responseType, checkStatus, formData } = options
  const sendData: AxiosRequestConfig = {
    url: baseUrl + requestUrl,
    method,
    headers,
    responseType,
  }

  const paramsData = Object.assign({}, DEFAULT_PARAMS, params)

  if (method === 'GET') {
    sendData.params = params
  } else if (formData) {
    const formData = new FormData()
    Object.keys(paramsData).forEach(key => {
      formData.append(key, paramsData[key])
    })
    sendData.data = formData
  } else {
    sendData.data = paramsData
  }

  return axios(sendData)
    .then(res => {
      const data: any = res.data
      if (!checkStatus || res.status == 200) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
    .catch(async err => {
      // await errorAction(err, sendData, options)
      return Promise.reject({ ...err, path: apiPath, sendData, resData: err })
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

  /**
   * 请求选项
   */
  interface RequestOptions {
    /** 请求类型: [POST | GET] 默认: POST */
    method?: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH'
    /** 基本 url, 没有特殊需求无需传递 */
    requestUrl: string
    /** 请求域名 */
    host?: string
    /** 协议 */
    protocol?: string
    /** 使用 formData 传递参数 */
    formData?: boolean
    /** 接口分组 */
    group?: string
    /** 超时时间,单位: ms */
    timeout?: number
    /** 请求过程中是否显示 Loading */
    loading?: boolean
    /** 发生错误时提示框类型, 默认: notification */
    errorType?: 'notification' | 'modal' | false
    /** 自定义请求头 */
    headers?: any
    /** 类型动态设置 */
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream' | undefined
    /** 是否校验请求状态 */
    checkStatus?: boolean
  }
}