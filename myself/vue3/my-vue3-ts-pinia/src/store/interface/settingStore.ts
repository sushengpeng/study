import { layout } from '@/enums/setting'
// export type LayoutType = 'tradition' | 'classic' | 'pageFullScreen' | 'horizontal'
export type LayoutType = layout
export interface SettingStore{
    isShowLogo: boolean,
    isShowScreenfull: boolean,
    isShowCollapse: boolean,
    isShowTagsView: boolean,
    isFixedHeader: boolean,
    isGrayAll: boolean,
    isInvertAll: boolean,
    layout: LayoutType,
    collapse: boolean,
    uniqueOpened: boolean,
    primary: string,
    dark: boolean,
    loginStyle: number,
    loginBgColor: string,
    pageAnimationStyle: string,
    menuStyle: {
        bgColor: string,
        textColor: string
    }
}
