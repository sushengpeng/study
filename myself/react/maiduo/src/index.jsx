import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import 'reset.css';
import 'swiper/swiper-bundle.min.js'
import Route from '@/router/route'
import '@/styles/reset.less'
import store from '@/reducers'
import { Provider } from 'react-redux';
// console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
