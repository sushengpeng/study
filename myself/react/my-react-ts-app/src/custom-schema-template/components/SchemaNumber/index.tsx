/*
 * @Autor: flygg123
 * @Date: 2022-05-20 10:39:20
 * @LastEditTime: 2022-05-20 13:55:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { Input } from 'antd';
import ConfigItem from "@/components/Global/ConfigItem"
import { Slider, InputNumber } from 'antd'
import { useState } from 'react';
interface SchemaNumberProps {
    label: string
    value: number | string
}
function index(props: SchemaNumberProps) {
    const [inputValue, setInputValue] = useState<number>(0)
    return (
        <ConfigItem label={props.label}>
            <Slider min={0} max={100} value={inputValue}></Slider>
            <InputNumber min={1}
                max={20}
                style={{ margin: '0 16px' }}
                value={inputValue}></InputNumber>
        </ConfigItem>
    )
}

export default index