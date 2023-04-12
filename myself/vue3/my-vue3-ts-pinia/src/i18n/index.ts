import { createI18n } from 'vue-i18n'
import { getBrowserLang } from '@/utils/util'
import { getLang } from '@/utils/auth'

const zh_cn = import.meta.globEager('./lang/**/zh-cn/**.ts')
const en = import.meta.globEager('./lang/**/en/**.ts')
type moduleType = Record<string, {
    [key: string]: any;
}>
// 加载 lang 文件夹下的国际化
const loadLang = (module: moduleType) => {
    const messages = {}
    for (const item of Object.values(module)) {
        Object.assign(messages, item.default)
    }
    return messages
}
const messages = {
    'zh-cn': { ...loadLang(zh_cn) },
    'en': { ...loadLang(en) },
}
// 注册i8n实例并引入语言文件
const i18n = createI18n({
    fallbackLocale: 'zh-cn',
    legacy: false,
    // globalInjection: true, // 如果不设置为true挂载到全局的话，{{$t(`message.name`)}}这种使用会报错
    locale: getLang() || getBrowserLang(),
    messages
})
console.log(i18n)
export default i18n
