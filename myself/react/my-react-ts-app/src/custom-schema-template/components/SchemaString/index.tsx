/*
 * @Autor: flygg123
 * @Date: 2022-05-27 10:56:07
 * @LastEditTime: 2022-06-05 11:47:11
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { createRef, useRef } from 'react'
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
    const input = useRef(null)
    const inputChange = (e: any) => {
        let dom : any = input.current
        dispatch(setComponentItem({ id: props.id, key: props._key, data: dom.input.value }))
    }
    return (
        <ConfigItem label={props.schema.label}>
            <Input
                ref={input}
                defaultValue={props.value}
                onChange={inputChange}
            ></Input>
        </ConfigItem >
    )
}

export default SchemaStringIndex