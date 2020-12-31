/* eslint-disable */
import Vue from "vue";
import axios from 'axios';
import { Dialog, Toast } from 'vant';
Vue.use(Toast);
/**
* 定义请求常量
* TIME_OUT、ERR_OK
*/
export const TIME_OUT = 300000; // 请求超时时间
export const ERR_OK = true; // 请求成功返回状态，字段和后台统一
// export const baseUrl = process.env.BASE_URL   // 引入全局url，定义在全局变量process.env中
let toastError = (response) => {
    let err;
    if (!response.data) {
        err = "服务器返回错误";
    }
    else {
        err = response.data.RespMessage || response.data.ReturnMsg || response.data.jsonError[0]._exceptionMessage;
    }
    //处理两边的空格
    err = err.trim();
    Toast(err);
};
// 请求超时时间
axios.defaults.timeout = TIME_OUT;
// 封装请求拦截
axios.interceptors.request.use(config => {
    // console.log(config)
    let token = localStorage.getItem('token'); // 获取token
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Authorization'] = '';
    if (token != null) { // 如果token不为null，否则传token给后台
        config.headers['Authorization'] = token;
    }
    if (config.isLoading && !store.state.loading.isLoading) {
        store.dispatch('loading/loadingShow');
    }
    return config;
}, error => {
    return Promise.reject(error);
});
// 封装响应拦截，判断token是否过期
let timmer;
axios.interceptors.response.use(response => {
    //当有多个请求同时发送时不直接关闭
    // store.dispatch('loading/loadingHide')
    // clearTimeout(timmer)
    // if (store.state.loading.isLoading) {
    //   timmer = setTimeout(function () {
    //     console.log('关闭loading')
    //     if (config.isLoading) {
    //       store.dispatch('loading/loadingHide')
    //     }
    //   }, 300)
    // }
    // console.log(response)
    // return Promise.resolve(response.data)
    if (response.status === 200 && (response.data.ReturnCode === "000000" || response.data._RejCode === "000000" || response.data.ReturnCode === "P047" || response.data._RejCode === "P047")) {
        return Promise.resolve(response.data);
    }
    else {
        // store.dispatch('loading/loadingHide')
        //如果有jsonError或者返回有错误码报错
        if (response.data === "" || response.data.jsonError || response.data.ReturnCode || response.data._RejCode) {
            if (response.config.isToast) {
                toastError(response);
            }
            return Promise.reject(response.data);
        }
        else {
            return Promise.resolve(response.data);
        }
    }
}, error => {
    Dialog.alert({
        message: '网络超时',
    });
    store.dispatch('loading/loadingHide');
    return Promise.reject(error);
});
// 封装post请求
export function fetch(requestUrl, params = {}, method = 'GET', isLoading = true, isToast = true, loadingText) {
    let url = baseUrl + requestUrl; //基础路径
    // console.log(baseUrl,requestUrl, params, method)
    if (method.toUpperCase() === 'GET') {
        // const urlPath =buildPath(url, params) 
        return axios({
            url: url,
            method: method.toUpperCase(),
            params: params,
            isLoading: isLoading,
            isToast: isToast,
            loadingText: loadingText
        });
    }
    else if (method.toUpperCase() === 'POST') {
        return axios({
            url: url,
            method: method.toUpperCase(),
            data: params,
            isLoading: isLoading,
            isToast: isToast,
            loadingText: loadingText
        });
    }
}
//# sourceMappingURL=axios1.js.map