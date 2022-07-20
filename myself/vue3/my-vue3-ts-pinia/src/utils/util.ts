/* eslint-disable prefer-destructuring */
import { isArray } from '@/utils/is'
import i18n from '@/i18n'

/**
 * @description 对象数组深克隆
 * @param obj 源对象
 * @returns {obj} 克隆后的对象
 */
export function deepCopy<T>(obj: any): T {
    let newObj: any
    try {
        newObj = obj.push ? [] : {}
    } catch (error) {
        newObj = {}
    }
    for (const attr in obj) {
        if (typeof obj[attr] === 'object') {
            newObj[attr] = deepCopy(obj[attr])
        } else {
            newObj[attr] = obj[attr]
        }
    }
    return newObj
}

/**
 * @description 判断数据类型
 * @param val 需要判断类型的数据
 * @returns {string} 数据类型
 */
export function isType(val: any) {
    if (val === null) return 'null'
    if (typeof val !== 'object') return typeof val
    return Object.prototype.toString.call(val).slice(8, -1)
        .toLocaleLowerCase()
}

/**
 * @description 递归查询当前路由所对应的tabPane
 * @param menuList 菜单列表
 * @param path 当前地址
 * @returns {Array} 当前路由所对应的tabPane
 */
export function getTabPane<T, U>(menuList: any[], path: U): T {
    let result: any
    for (const item of menuList || []) {
        if (item.path === path) result = item
        const res = getTabPane(item.children, path)
        if (res) result = res
    }
    return result
}

/**
 * @description 生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
export function randomNum(min: number, max: number): number {
    const num = Math.floor(Math.random() * (min - max) + max)
    return num
}

/**
 * @description 获取浏览器默认语言
 * @returns {String} 语言
 */
export function getBrowserLang() {
    const browserLang = navigator.language ? navigator.language : navigator.browserLanguage
    let defaultBrowserLang = ''
    if (browserLang.toLowerCase() === 'cn' || browserLang.toLowerCase() === 'zh' || browserLang.toLowerCase() === 'zh-cn') {
        defaultBrowserLang = 'zh-cn'
    } else {
        defaultBrowserLang = 'en'
    }
    return defaultBrowserLang
}

/**
 * @description 格式化表格单元格默认值
 * @param row 行
 * @param col 列
 * @param callValue 当前单元格值
 * @return {String} 格式化后的值
 * */
export function defaultFormat(row: number, col: number, callValue: any) {
    // 如果当前值为数组,使用 / 拼接（根据需求自定义）
    if (isArray(callValue)) return callValue.length ? callValue.join(' / ') : '--'
    return callValue ?? '--'
}

/**
 * @description 根据枚举列表查询当需要的数据
 * @param callValue 当前单元格值
 * @param enumData 枚举列表
 * @param type 过滤类型（目前只有 tag）
 * @return {String} 格式化后的值
 * */
export function filterEnum(callValue: any, enumData: any[] = [], type?: string): string {
    const filterData = enumData.find(item => item.value === callValue)
    if (type === 'tag') return filterData?.tagType ? filterData.tagType : ''
    return filterData ? filterData.label : '--'
}

/**
 * @description 格式化路由标题
 * @param title 接受的标题内容
 * @return {String} 格式化后的值
 * */
export function formatRouterTitle(title: string): string {
    if(title.includes('.')) {
        return i18n.global.t(title)
    }
    return title
}

/**
 * @description 数组扁平化
 * @param array 需要处理的数据源
 * @return array 格式化后的数据
 * */
interface HasChildren<T> {
    children?: T[],
}
export function flatTree<T extends HasChildren<T>>(arr: T[]) {
    const res: T[] = []
    function deep(arr: T[]) {
        return arr.map((item: T) => {
            item = { ...item }
            res.push(item)
            if (item.children && item.children.length) {
                deep(item.children)
            }
        })
    }
    deep(arr)
    return res
}