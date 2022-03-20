import axios from 'axios';
// import path from 'path'
// import { errorAction } from './handle-response'
export const baseUrl = process.env.BASE_URL; // 引入全局url，定义在全局变量process.env中
export const ERR_OK = true; // 请求成功返回状态，字段和后台统一
// axios 跨域请求携带 cookie
axios.defaults.withCredentials = true;
axios.defaults.timeout = 300000;
// 封装请求拦截
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    return Promise.resolve(response.data);
}, error => {
    return Promise.reject(error);
});
// 默认传递的参数
const DEFAULT_PARAMS = {};
/**
 * 发起一个请求
 * @param requestParams
 */
export async function fetch(requestParams) {
    const { method, requestUrl, params } = requestParams;
    const sendData = {
        url: baseUrl + requestUrl,
        method,
    };
    if (method === 'GET') {
        sendData.params = params;
    }
    else {
        sendData.data = params;
    }
    // else if (formData) {
    //   const formData = new FormData()
    //   Object.keys(paramsData).forEach(key => {
    //     formData.append(key, paramsData[key])
    //   })
    //   sendData.data = formData
    // } 
    return axios(sendData)
        .then(res => {
        const data = res.data;
        if (!checkStatus || res.status == 200) {
            return data;
        }
        else {
            return Promise.reject(data);
        }
    })
        .catch(async (err) => {
        // await errorAction(err, sendData, options)
        return Promise.reject({ ...err, path: apiPath, sendData, resData: err });
    });
}
//# sourceMappingURL=request.js.map