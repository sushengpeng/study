import { customRef } from 'vue'
//防抖获取v-model中的值
export function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}
//设置url
export function setUrl(url) {
  return process.env.VUE_APP_IMGURL + url
}
export default {
  useDebouncedRef,
  setUrl
}