/*
 * @Autor: flygg123
 * @Date: 2022-05-27 10:56:07
 * @LastEditTime: 2022-05-30 09:19:17
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import { SchemaObjectProps } from '../SchemaObject'
import { setComponentItem } from '@/store/module/project'
import { useDispatch } from 'react-redux'
import ConfigItem from "@/components/Global/ConfigItem"
import { DatePicker } from 'antd'
import moment from "moment"
export interface SchemaTimeProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
}
function SchemaStringIndex(props: SchemaTimeProps) {
    const dispatch = useDispatch()
    const timeChange = (time: any) => {
        console.log(time.format('YYYY-MM-DD HH:mm:ss'))

        // dispatch(setComponentItem({ id: props.id, key: props._key, data: item.value }))
    }
    return (
        <ConfigItem label={props.schema.label}>
            <DatePicker
                mode='date'
                showTime
                onChange={timeChange}
                placeholder='选择日期时间'
                // defaultValue={props.value ? moment(props.value, 'YYYY-MM-DD HH:mm:ss') : ''}
                style={{ width: '100%' }}
            ></DatePicker>
        </ConfigItem >
    )
}

export default SchemaStringIndex