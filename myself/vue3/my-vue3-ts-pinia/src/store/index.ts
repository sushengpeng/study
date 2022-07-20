import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { useAppStore } from './modules/app'
const pinia = createPinia()
pinia.use(piniaPersist)

export {
    pinia as default,
    useAppStore
}