/*
 * @Autor: flygg123
 * @Date: 2022-06-22 09:51:13
 * @LastEditTime: 2022-06-23 10:29:19
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import SideBar, { Group } from '@/components/SideBar'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function goodsManager() {
    const navigateTo = useNavigate()
    const add = () => {
        navigateTo('/mall/goods/edit')
    }
    return (
        <div className="m20 p20 bg-white">
            <div className="mb20">
                <Button type="primary" className="f-white bg-theme" onClick={() => add()}>发布商品</Button>
            </div>
        </div>
    )
}

export default goodsManager