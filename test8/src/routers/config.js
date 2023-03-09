import React, { lazy } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";

const config = [
  {
    path: "/",
    component: BlankLayout, // 空白页布局
    childRoutes: [ // 子菜单路由
      { 
        path: "/login", // 路由路径
        name: "登录页", // 菜单名称 (不设置,则不展示在菜单栏中）
        icon: "setting", // 菜单图标
        component: lazy(() => import("@/pages/Login")) // 懒加载 路由组件
      },
      // login等没有菜单导航栏等基本布局的页面， 要放在基本布局BasicLayout之前。
      {
        path: "/",
        component: BasicLayout, // 基本布局框架
        childRoutes: [
          {
            path: "/welcome",
            name: "欢迎页",
            icon: "smile",
            component: lazy(() => import("@/pages/Welcome"))
          },
          // {... /* 其他 */}, 
          { path: "/", exact: true, redirect: "/welcome" },
          { path: "*", exact: true, redirect: "/exception/404" }
        ]
      }
    ]
  }
];

export default config;