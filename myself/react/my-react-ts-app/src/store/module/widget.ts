/*
 * @Autor: flygg123
 * @Date: 2022-05-05 08:48:18
 * @LastEditTime: 2022-05-16 15:18:05
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { Reducer } from 'redux';
import { IAction } from '../types';
export interface WidgetState {
    fields?: any
    initializing?: any
}
const files = require.context("@/components/widgets", true, /\.json/)
let fields: any = {}
let initializing: any = {}

files.keys().forEach(key => {
    const [, name] = key.split('/')
    let config = { component: name, ...files(key) }
    fields[name] = config.fields
    initializing[name] = initDefaulValue(config)
})
// 初始化组件初始数据
function initDefaulValue(config: any) {
    let { component, name, icon, fields } = config
    let temp = { component, name, icon }
    setDefaultValue(fields, temp)
    return temp
}
// 递归设置各层级初始数据
function setDefaultValue(fields: any, initializing: any) {
    for (let key in fields) {
        let { type, value, child } = fields[key]
        if (type == 'object') {
            initializing[key] = {}
            child && setDefaultValue(fields[key].child, initializing[key])
        } else {
            initializing[key] = value
        }
    }
    return initializing
}

const defaultWidget: WidgetState = {
    fields: fields,
    initializing: initializing
};
const widegtReducer: Reducer<WidgetState, IAction<any>> = (
    state = defaultWidget,
    action: IAction<any>,
) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
};

export default widegtReducer;