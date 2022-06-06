/*
 * @Autor: flygg123
 * @Date: 2022-05-09 10:32:06
 * @LastEditTime: 2022-05-31 10:32:16
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { memo, useState } from 'react'
import { Button } from "antd"
import SaveDialog from './SaveDialog'
const Index = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const back = () => { }
    const toSchema = () => { }
    const viewQr = () => { }
    const baopenSaveck = () => { }
    const show = () => { }
    const onLogout = () => { }
    const openSave = () => {
        setShowDialog(true)
    }
    const topBarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
        width: '100%',
        padding: '0 20px',
        background: '#fff',
        borderBottom: ' 1px solid #ebedf0',
    }
    const marginLeft10 = {
        marginLeft: '10px',
    }
    const btnColor = {
        marginLeft: '10px',
        background: '#155bd4',
        borderColor: '#155bd4',
        color: '#fff'
    }
    return (
        <div>
            <div className="topBar" style={topBarStyle}>
                <span className="f14 pointer" onClick={back}>切换商城</span>
                {/* 右侧内容 */}
                <div>
                    <Button onClick={toSchema}>schema 生成器</Button>
                    <Button onClick={viewQr} style={marginLeft10}>商城二维码</Button>
                    <Button onClick={show} style={marginLeft10}>实时预览</Button>
                    <Button type='primary' onClick={openSave} style={marginLeft10}> 保存</Button>
                    <Button onClick={onLogout} style={marginLeft10}> 退出</Button>
                </div>
            </div>
            <SaveDialog showDialog={showDialog} setShowDialog={setShowDialog} />
        </div>
    )
}

export default memo(Index)