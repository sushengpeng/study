/*
 * @Autor: flygg123
 * @Date: 2022-05-26 17:07:36
 * @LastEditTime: 2022-05-27 10:54:48
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import ConfigItem from '@/components/Global/ConfigItem'
import { setComponentItem } from '@/store/module/project'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SchemaObjectProps } from '../SchemaObject'
import style from "./index.module.scss"
export interface SchemaSelectProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
}
function SchemaSelectIndex(props: SchemaSelectProps) {
    const { data } = props.schema
    const dispatch = useDispatch()
    const itemChange = (item: any) => {
        console.log(props)
        dispatch(setComponentItem({ id: props.id, key: props._key, data: item.value }))
    }
    const getLabel = (arr: any[], value: string | undefined): string => {
        if (!value) return ''
        return arr.find(item => item.value === value)?.label
    }
    const [isColumn] = useState<boolean>(data.length > 3)
    return (
        <div className={`flex bg-white p10 ${isColumn?'flex-column':''}`}>
            <div className="flex flexLeft" style={{lineHeight: '32px'}}>
                <div className="w70 f13 f-grey">{props.schema.label}</div>
                <div className={style.itemValue}>{getLabel(data, props.value)}</div>
            </div>
            <div className="flex flexRight" style={{marginTop: isColumn?'10px':'0'}}>
                {
                    data.map((item: any, index: number) => {
                        return <div
                            className={`${style.selectItem} ${props.value == item.value ? style.selectItemActive : ''}`}
                            key={index}
                            onClick={() => itemChange(item)}>
                            {item.label}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SchemaSelectIndex