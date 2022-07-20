/*
 * @Autor: flygg123
 * @Date: 2022-04-27 21:04:21
 * @LastEditTime: 2022-06-23 10:21:17
 * @LastEditors: Please set LastEditors
 * @Description:
 */
export interface IRouteBase {
  // 路由路径
  path?: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  // 路由信息
  meta: IRouteMeta;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  // 是否为子路由首页
  isIndex?: boolean
}

export interface IRouteMeta {
  title: string;
  icon?: string;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

/**
 * routes 第一级路由负责最外层的路由渲染，比如 userLayout 和 Layout 的区分
 * 所有系统内部存在的页面路由都要在此地申明引入，而菜单栏的控制是支持异步请求控制的
 */
import React, { lazy } from "react";
const Redirect = lazy(() => import("@/views/redirect/index"));
const Login = lazy(() => import("@/views/login/index"));
const Managet = lazy(() => import("@/views/managet"));
const MallIndex = lazy(() => import("@/views/mall/index"));
const MallManage = lazy(() => import("@/views/mall/manage"));
const MallGoods = lazy(() => import("@/views/mall/goods"));
const MallGoodsManager = lazy(() => import("@/views/mall/goods/goodsManager"));
const MallGroupManager = lazy(() => import("@/views/mall/goods/groupsManager"));
const MallGoodsEdit = lazy(() => import("@/views/mall/goods/goodsEdit"));
const PageBuild = lazy(() => import("@/views/mall/pageBuild"));
const layoutRouteList: IRoute[] = [
  {
    path: "/",
    component: Redirect,
    meta: {
      title: ""
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
    },
    children: [],
  },
  {
    path: "/managet",
    component: Managet,
    meta: {
      title: "商城",
    },
  },
  {
    path: "/mall",
    meta: {
      title: ""
    },
    component: MallIndex,
    children: [
      {
        path: '/mall/index',
        component: MallManage,
        meta: {
          title: '页面',
        },
      },
      {
        path: "/mall/goods",
        component: MallGoods,
        meta: {
          title: '商品',
        },
        children: [
          {
            path: "/mall/goods/goods-manager",
            component: MallGoodsManager,
            meta: {
              title: '全部商品'
            },
          },
          {
            path: "/mall/goods/group-manager",
            component: MallGroupManager,
            meta: {
              title: '全部分类'
            }
          },
          {
            path: "/mall/goods/edit",
            component: MallGoodsEdit,
            meta: {
              title: '商品编辑'
            }
          },
        ]
      },
      {
        path: "/mall/page-build",
        component: PageBuild,
        meta: {
          title: '页面配置',
        },
      },
    ]
  }
];

export default layoutRouteList;
