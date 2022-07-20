import { appState, Lang } from '@/store/interface/appStore'
import { setLang, getLang } from '@/utils/auth'
import i18n from '@/i18n'

export const useAppStore = defineStore('app', {
    state: (): appState => ({
        lang: getLang(),
        isMobile: false
    }),

    // 可以操作异步 和 同步提交state
    actions: {
        // 设置多语言
        changeLang(lang: Lang) {
            this.lang = lang
            setLang(lang)
            i18n.global.locale.value = lang
        },
        // 设置当前是否是移动端
        setIsMobile(isMobile: boolean) {
            this.isMobile = isMobile
        }
    }
})
