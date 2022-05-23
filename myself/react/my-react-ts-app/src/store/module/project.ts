import { Reducer } from 'redux';
import { IAction } from '../types';
export interface Project {
    project: ProjectProp
    fixedPages: Array<object>     // 静态页面集合
    curPage: PageItem               // 当前页面
    curComponent: string          // 当前物料
    dragComponent: string         // 拖拽物料
    dragStatus: boolean           // 拖拽入页面状态
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
    dragStatus: false
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
const projectReducer: Reducer<Project, IAction<any>> = (
    state = defaultProject,
    action: IAction<any>,
) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_PROJECT':
            state.project = { ...payload }
            return { ...state };
        case 'SET_CURPAGE':
            state.curPage = { ...payload }
            return { ...state };
        case 'SET_HOMEPAGE':
            // state.project.pages =
            let { pages } = state.project
            pages?.map((page: PageItem) => {
                if (page.id === payload.id) {
                    page.home = true
                } else {
                    page.home = false
                }
                return page
            })
            return { ...state };
        default:
            return state;
    }
};


export default projectReducer