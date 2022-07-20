/*
 * @Autor: flygg123
 * @Date: 2022-05-09 09:38:06
 * @LastEditTime: 2022-06-22 11:17:07
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { useEffect } from 'react'
import SideBar, { Group } from '@/components/SideBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function goodsIndex() {
    const groups: Array<Group> = [{
        label: "模拟商品",
        list: [
            {
                name: "全部商品",
                path: "/mall/goods/goods-manager",
            },
            {
                name: "全部分类",
                path: "/mall/goods/group-manager",
            },
        ],
    }]
    const navigateTo = useNavigate()
    useEffect(()=>{
        navigateTo("/mall/goods/goods-manager")
    },[])
    return (
        <div className="flex h-100">
            <SideBar groups={groups} />
            <div className="body flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default goodsIndex