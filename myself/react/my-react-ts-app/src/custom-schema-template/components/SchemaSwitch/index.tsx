/*
 * @Autor: flygg123
 * @Date: 2022-05-30 10:36:48
 * @LastEditTime: 2022-05-30 10:56:50
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import { SchemaObjectProps } from '../SchemaObject'
import { setComponentItem } from '@/store/module/project'
import { useDispatch } from 'react-redux'
import ConfigItem from "@/components/Global/ConfigItem"
import { Switch } from 'antd'
import style from "./index.module.scss"
export interface SchemaStringProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
}
function SchemaSwitch(props: SchemaStringProps) {
    const dispatch = useDispatch()
    // console.log(props)
    const onChange = (item: any) => {
        dispatch(setComponentItem({ id: props.id, key: props._key, data: item.value }))
    }
    return (
        <ConfigItem label={props.schema.label}>
            <div className={style.wrap}>
                <div className={style["wrap-label"]}>{props.schema.value ? '显示' : '隐藏'}</div>
                <Switch onChange={onChange} defaultChecked={props.schema.value ? true : false} />
            </div>
        </ConfigItem >
    )
}

export default SchemaSwitch