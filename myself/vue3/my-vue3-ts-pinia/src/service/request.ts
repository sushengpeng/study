import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import { AxiosCanceler } from './helper/axiosCancel'
import { checkStatus } from './helper/checkStatus'
import { ResultEnum } from '@/enums/httpEnum'
import { getToken, getLang } from '@/utils/auth'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/store'
const axiosCanceler = new AxiosCanceler()
const config = {
    // 默认地址
    baseURL: import.meta.env.VITE_API_BASEURL, // API 请求的默认前缀
    // 设置超时时间（10s）
    timeout: ResultEnum.TIMEOUT as number,
    // 跨域时候允许携带凭证
    withCredentials: false
}
// 继承 AxiosRequestConfig 即增强配置，自定义的配置项用来封装自己要的功能
interface CCRequestConfig extends AxiosRequestConfig {
    showLoading?: boolean
}
const IS_SHOW_LOADING = true // 发出请求后显示正在加载的动画 - 默认显示
class RequestHttp {
    private service: AxiosInstance
    private showLoading = true
    public constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config)
        this.init()
    }
    private init() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }
    private interceptorsRequest() {

        /**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到vuex/本地储存当中
		 */
        this.service.interceptors.request.use(
            (config: CCRequestConfig) => {
                // console.log(config && config.showLoading)
                // 应用加载文案
                this.showLoading = config.showLoading ?? IS_SHOW_LOADING
                // * 将当前请求添加到 pending 中
                axiosCanceler.addPending(config)
                this.showLoading && showFullScreenLoading()
                const token = getToken()
                return { ...config, headers: { token: token || '', lang: getLang() } }
            },
            (error: AxiosError) => Promise.reject(error)
        )
    }
    private interceptorsResponse() {

        /**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
        this.service.interceptors.response.use(
            async (response: AxiosResponse) => {
            // 每次请求之后设置默认显式 loading
                this.showLoading = IS_SHOW_LOADING
                const { data, config } = response
                // * 在请求结束后，移除本次请求
                axiosCanceler.removePending(config)
                tryHideFullScreenLoading()
                // * 登陆失效（code === 401）
                if (data.code === ResultEnum.OVERDUE) {
                    ElMessage.error(data.msg)
                    // removeToken()
                    const userStore = useUserStore()
                    await userStore.resetToken()
                    router.replace({ name: 'login' })
                    return Promise.reject(data)
                }
                // * 全局错误信息拦截
                if ( data.code !== ResultEnum.SUCCESS) {
                    ElMessage.error(data.msg)
                    return Promise.reject(data)
                }
                // * 成功请求
                return Promise.resolve(data.data)
            },
            (error: AxiosError) => {
                const { response } = error
                tryHideFullScreenLoading()
                // 每次请求之后设置默认显式 loading
                this.showLoading = IS_SHOW_LOADING
                // 根据响应的错误状态码，做不同的处理
                if (response) return checkStatus(response.status)
                // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
                if (!window.navigator.onLine) return router.replace({ path: '/500' })
                return Promise.reject(error)
            }
        )
    }

    // * 常用请求方法封装
    get<T>(url: string, params?: object, _object = {}): Promise<T> {
        return this.service.get(url, { params, ..._object })
    }
    post<T>(url: string, params?: object, _object = {}): Promise<T> {
        return this.service.post(url, params, _object)
    }
    put<T>(url: string, params?: object, _object = {}): Promise<T> {
        return this.service.put(url, params, _object)
    }
    delete<T>(url: string, params?: any, _object = {}): Promise<T> {
        return this.service.delete(url, { params, ..._object })
    }
}

export default new RequestHttp(config)
