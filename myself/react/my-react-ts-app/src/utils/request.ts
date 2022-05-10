/*
 * @Autor: flygg123
 * @Date: 2022-04-27 20:39:14
 * @LastEditTime: 2022-05-06 10:27:46
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { message, Modal } from "antd";
import AdminConfig from "../config";
import { getToken } from "./cookie";
// import { getToken } from '../utils/cookie';
// import store from '../store/index';
// import { logout } from '../store/module/user';
// import { clearSideBarRoutes } from '../store/module/app';

interface ResponseData<T> {
  status: string;

  data: T;

  message: string;
}
// 指定 axios 请求类型

axios.defaults.headers.common = {
  "Content-Type": "application/json;charset=utf-8",
};

// 指定请求地址

axios.defaults.baseURL = "api";

// 添加请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();

    // // 获取用户token，用于校验
    // /* eslint-disable  no-param-reassign */
    if (token) {
      config.headers = {
        'Authorization': token
      }
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 添加响应拦截器，拦截登录过期或者没有权限

axios.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    if (response.data.status == "10000") {
      return Promise.resolve(response.data);
    } else if (response.data.status == "10002") {
      window.location.href = `${window.location.origin
        }/login?redirectURL=${encodeURIComponent(window.location.href)}`;
    } else {
      message.error(response.data.message)
      return Promise.reject(response.data);
    }

    // 登录已过期或者未登录
    // if (response.data.code === AdminConfig.LOGIN_EXPIRE) {
    //   Modal.confirm({
    //     title: '系统提示',
    //     content: response.data.msg,
    //     okText: '重新登录',
    //     onOk() {
    //       store.dispatch(clearSideBarRoutes());
    //       store.dispatch(logout());
    //       window.location.href = `${
    //         window.location.origin
    //       }/react-ant-admin/system/login?redirectURL=${encodeURIComponent(window.location.href)}`;
    //     },
    //     onCancel() {},
    //   });

    //   return Promise.reject(new Error(response.data.msg));
    // }

    // 请求成功
    // if (response.data.code === AdminConfig.SUCCESS_CODE) {
    //   return response.data as any;
    // }

    // 请求成功，状态不为成功时
    // console.log(response)
    // message.error(response.message);

  },
  (error: AxiosError) => {
    message.error(error.message);

    return Promise.reject(error);
  }
);

// 统一发起请求的函数
export default function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options);
}
