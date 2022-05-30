/*
 * @Autor: flygg123
 * @Date: 2022-05-20 10:39:20
 * @LastEditTime: 2022-05-26 20:13:02
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { Input } from 'antd';
import ConfigItem from "@/components/Global/ConfigItem"
import { Slider, InputNumber } from 'antd'
import { useState } from 'react';
import { SchemaObjectProps } from '../SchemaObject';
import { useDispatch } from 'react-redux';
import { setComponentItem } from '@/store/module/project';
import defaultData from "./initializing"
export interface SchemaNumberProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
}
function index(props: SchemaNumberProps) {
    const dispatch = useDispatch()
    const sliderChange = (val: number) => {
        dispatch(setComponentItem({ id: props.id, key: props._key, data: val }))
    }
    return (
        <ConfigItem label={props.schema.label}>
            <Slider
                min={defaultData.options.min}
                max={defaultData.options.max}
                value={Number(props.value || 0)}
                onChange={sliderChange}
                style={{ width: '130px' }}
            ></Slider>
            <InputNumber
                min={defaultData.options.min}
                max={defaultData.options.max}
                style={{ marginLeft: '16px' }}
                value={Number(props.value || 0)}
                onChange={sliderChange}
            ></InputNumber>
        </ConfigItem>
    )
}

export default index