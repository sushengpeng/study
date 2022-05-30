/*
 * @Autor: flygg123
 * @Date: 2022-05-27 10:56:07
 * @LastEditTime: 2022-05-27 11:01:21
 * @LastEditors: 
 * @Description: 
 */
import React from 'react'
import { SchemaObjectProps } from '../SchemaObject'
import { setComponentItem } from '@/store/module/project'
import { useDispatch } from 'react-redux'
import ConfigItem from "@/components/Global/ConfigItem"
import { Input } from 'antd'
export interface SchemaStringProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
}
function SchemaStringIndex(props: SchemaStringProps) {
    const dispatch = useDispatch()
    const inputChange = (item: any) => {
        console.log(props)
        dispatch(setComponentItem({ id: props.id, key: props._key, data: item.value }))
    }
    return (
        <ConfigItem label={props.schema.label}>
            <Input
                value={props.value}
                onChange={inputChange}
            ></Input>
        </ConfigItem >
    )
}

export default SchemaStringIndex