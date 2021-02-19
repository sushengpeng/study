import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import 'reset.css';
import 'swiper/swiper-bundle.min.js'
import Route from '@/router/route'
import '@/styles/reset.less'
ReactDOM.render(
  <Route />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
