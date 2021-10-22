/* eslint-disable */
import axios from 'axios'
/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
export const TIME_OUT = 300000;    // 请求超时时间
export const ERR_OK = true;      // 请求成功返回状态，字段和后台统一

// 请求超时时间
axios.defaults.timeout = TIME_OUT
// 封装请求拦截
axios.interceptors.request.use(
  config => {
    // console.log(config)
    let token = localStorage.getItem('token')   // 获取token
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Authorization'] = ''
    if (token != null) {                          // 如果token不为null，否则传token给后台
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error)
  }
)
// 封装post请求
export default function fetch(requestUrl, params = {}, method = 'GET', isLoading = true, isToast = true, loadingText) {
  let url = requestUrl //基础路径
  // console.log(baseUrl,requestUrl, params, method)
  if (method.toUpperCase() === 'GET') {
    // const urlPath =buildPath(url, params) 
    return axios({
      url: url,
      method: method.toUpperCase(),
      params: { ...params, phoneType: "h5" },
      isLoading: isLoading,
      isToast: isToast,
      loadingText: loadingText
    })
  } else if (method.toUpperCase() === 'POST') {
    return axios({
      url: url,
      method: method.toUpperCase(),
      data: { ...params, phoneType: "h5" },
      isLoading: isLoading,
      isToast: isToast,
      loadingText: loadingText
    })
  }

}
