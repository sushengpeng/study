/*
 * @Autor: flygg123
 * @Date: 2022-05-08 15:43:44
 * @LastEditTime: 2022-05-30 16:24:40
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { Reducer } from 'redux';
import { IAction } from '../types';
import { produce } from "immer"
export interface Project {
    project: ProjectProp
    fixedPages: Array<object>     // 静态页面集合
    curPage: PageItem               // 当前页面
    curComponent: string          // 当前物料
    dragComponent: string         // 拖拽物料
    dragStatus: boolean           // 拖拽入页面状态
    config: Config
}
export interface Config {
    backgroundColor: string
}
export interface ProjectProp {
    cover?: string
    id?: string
    industry?: string
    logo?: string
    name?: string
    pages?: Array<PageItem>
    type?: string
    userId?: string
}
export interface PageItem {
    id?: string
    name?: string
    home?: boolean
    componentList?: object[]
}
export interface ComponentInfo {

}
const defaultProject: Project = {
    project: {},
    fixedPages: [],
    curPage: {},
    curComponent: "",
    dragComponent: "",
    dragStatus: false,
    config: {
        backgroundColor: "#fff"
    }
}
const getObjectValue = (obj: any, key: string, data: any) => {
    let keyList = key.split('.')
    let value = obj
    for (let i = 0; i < keyList.length; i++) {
        if (keyList.length - 1 === i) {
            value[keyList[i]] = data
        } else {
            value = value[keyList[i]]
        }
    }
    return obj
}
export const setProject: (project: ProjectProp) => IAction<ProjectProp> = (project: ProjectProp) => ({
    type: 'SET_PROJECT',
    payload: project,
});
export const setCurPage: (page: ProjectProp) => IAction<ProjectProp> = (page: ProjectProp) => ({
    type: 'SET_CURPAGE',
    payload: page,
});
export const setHomePage: (page: ProjectProp) => IAction<ProjectProp> = (page: ProjectProp) => ({
    type: 'SET_HOMEPAGE',
    payload: page,
});
export const setPageColor: (color: string, key: string) => IAction<string> = (color: string, key: string) => ({
    type: 'SET_PAGECOLOR',
    payload: color,
});
export const setItem: (payload: any) => IAction<any> = (payload: any) => ({
    type: 'SET_ITEM',
    payload: payload,
});
export const setComponentItem: (payload: { id: string, key: string, data: any }) => IAction<any> = (payload: { id: string, key: string, data: any }) => ({
    type: 'SET_COMPONENT_ITEM',
    payload: payload,
});

const projectReducer: Reducer<Project, IAction<any>> = (
    state = defaultProject,
    action: IAction<any>,
) => produce(state, (draft: Project) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_PROJECT':
            draft.project = { ...payload }
            return draft
        case 'SET_CURPAGE':
            draft.curPage = { ...payload }
            return draft
        case 'SET_HOMEPAGE':
            let { pages } = draft.project
            pages?.map((page: PageItem) => {
                if (page.id === payload.id) {
                    page.home = true
                } else {
                    page.home = false
                }
                return page
            })
            return draft;
        case 'SET_PAGECOLOR':
            draft.config.backgroundColor = payload
        case 'SET_ITEM':
            if (typeof payload === 'function') {
                return produce(state, (draft: Project) => {
                    payload(draft)
                })
            }
        case 'SET_COMPONENT_ITEM':
            const { id, key, data } = payload
            let list = draft.curPage.componentList?.map((item: any) => {
                if (item.id === id) {
                    item = getObjectValue(item, key, data)
                }
                return item
            })
            draft.curPage.componentList = list
            return draft
        default:
            return draft;
    }
})


export default projectReducer