import Cookies from 'js-cookie'
import { Lang } from '@/store/interface/appStore'
const TokenKey = 'shuju_token'

export function getToken(): string {
    return Cookies.get(TokenKey) || ''
}

export function setToken(token: string): void {
    Cookies.set(TokenKey, token, { expires: 7 }) // 设置cookie过期时间为7天以后
}

export function removeToken(): void {
    Cookies.remove(TokenKey)
}
const langKey = 'zhfy-lang'

export function getLang(): Lang {
    return Cookies.get(langKey) as Lang || 'zh-cn'
}

export function setLang(lang: string): void {
    Cookies.set(langKey, lang, { expires: 7 })
}

export function removeLang(): void {
    Cookies.remove(langKey)
}

