/*
 * @Autor: flygg123
 * @Date: 2022-04-27 20:13:19
 * @LastEditTime: 2022-05-08 18:30:45
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import React, { Suspense } from "react";
import { Spin } from "antd";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { IRoute } from "./router/config";
import layoutRouteList from "@/router/config";
import './App.scss';
// import config from "@/config";

function App() {
  const childRoute = (route: IRoute) => {
    // console.log(route)
    let { children } = route
    if (!children) {
      return null
    }
    return children.map((route, index) => {
      return (
        <Route index={route.isIndex} key={route.path + '_' + index} path={route.path} element={<route.component />}>
          {childRoute(route)}
        </Route>
      )
    })
  }
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router>
        <Routes>
          {layoutRouteList.map((route: IRoute, index: number) => (
            <Route key={index} path={route.path} element={<route.component />}>
              {childRoute(route)}
            </Route>
          ))}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
