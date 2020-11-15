import axios from 'axios';
import querystring from 'querystring'
//超时时间
const timeout = 30000;

const instance = axios.create({
  timeout: 30000,
  headers: {
    'X-Custom-Header': 'foobar',
    "Content-Type": "'multipart/form-data"
  }
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
const request = (url, methods, params) => {
  if (methods.toUpperCase() === "GET") {
    return axios.get(url+stringify.stringify(params))
  } else {
    return axios.post(url,params)
  }
}

export default request
