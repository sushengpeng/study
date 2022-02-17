/* eslint-disable */
import axios from 'axios'
import store from '@/store'
import urlAnaylais from "./urlAnaylais"
const service = axios.create({
  baseURL: "",
  timeout: 300000
})

const CancelToken = axios.CancelToken;
// 封装请求拦截
service.interceptors.request.use(
  config => {
    const source = CancelToken.source();
    config['cancelToken'] = source.token;
    config['source'] = source;
    store.commit('addRequest', urlAnaylais(config))
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    let { data } = response
    return Promise.resolve(data);
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default service
