/*
 * @Autor: flygg123
 * @Date: 2022-04-27 20:13:19
 * @LastEditTime: 2022-05-27 11:28:32
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@/styles/reset.scss"
import 'antd/dist/antd.css';
import store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from "@/store/index"
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ConfigProvider>
)
