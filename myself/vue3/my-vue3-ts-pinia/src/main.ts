/*
 * @Autor: flygg123
 * @Date: 2022-06-24 09:11:28
 * @LastEditTime: 2022-07-29 15:40:57
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store';
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue' // 引入组件
import i18n from '@/i18n';
import 'animate.css'
import '@/styles/index.scss'
const app = createApp(App);


app.component('svg-icon', SvgIcon)
app.use(router).use(store).use(i18n).mount('#app');
