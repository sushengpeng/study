/*
 * @Autor: flygg123
 * @Date: 2022-04-27 20:13:19
 * @LastEditTime: 2022-05-08 18:28:30
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
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
