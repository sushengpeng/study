import axios from 'axios';
import { stringify } from 'querystring'

const instance = axios.create({
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'foobar',
    "Content-Type": "'multipart/form-data"
  }
});
const showLoading = function(){
  document.getElementsByClassName("loading")[0].style.display = 'block'
}
const hideLoading = function(){
  document.getElementsByClassName("loading")[0].style.display = 'none'
}
const staticParams = {
  "phoneType": "h5"
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  showLoading()
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  hideLoading()
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
const request = (url, params, methods = 'post') => {
  if (methods.toUpperCase() === "GET") {
    return instance.get(url + stringify.stringify(params))
  } else {
    return instance.post(url, { ...params,...staticParams })
  }
}

export default request
