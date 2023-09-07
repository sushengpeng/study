import { formatRouterTitle } from '@/utils/util'
import { Lang } from '@/store/interface/appStore'
import { TITLE } from '@/config/config'
// import enUS from '@kangc/v-md-editor/lib/lang/en-US'
// import zhEn from '@kangc/v-md-editor/lib/lang/zh-CN'
// import VueMarkdownEditor from '@kangc/v-md-editor'
// import { useMenuStore, useTagsViewStore } from '@/store'
import router from '@/router'
// import { initRouter, resetRouter } from '@/router/utils'
// export async function changeLanguage(lang: Lang) {
//     await resetRoute()
//     changMdEditorLang(lang)
//     changeTagsViewLang()
// }

// 动态设置浏览器title
export function changeTitle(title: string) {
    document.title = `${formatRouterTitle(title)} | ${TITLE}`
}
// v-md-editor 编辑器语言
// export function changMdEditorLang(language: Lang) {
//     const lang = language === 'zh-cn' ? 'zh-CN' : 'en-US'
//     const langObj = language === 'zh-cn' ? zhEn : enUS
//     VueMarkdownEditor.lang.use(lang, langObj)
// }
// 左侧菜单语言切换
// async function resetRoute() {
//     const menuStore = useMenuStore()
//     await resetRouter(router)
//     await initRouter(router)
//     await menuStore.changeMenuData()
// }
// tagsView语言切换
// function changeTagsViewLang() {
//     const tagsViewStore = useTagsViewStore()
//     tagsViewStore.changeTagsViewLanguage()
// }
