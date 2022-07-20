/*
 * @Autor: flygg123
 * @Date: 2022-06-24 09:11:28
 * @LastEditTime: 2022-07-19 17:22:35
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store';
// import ElementPlus from 'element-plus'
import i18n from '@/i18n';
import '@/styles/tailwindcss/index.css';
const app = createApp(App);
app.use(router).use(store).use(i18n).mount('#app');
