/*
 * @Autor: flygg123
 * @Date: 2022-05-13 16:27:28
 * @LastEditTime: 2022-05-20 10:30:22
 * @LastEditors: 
 * @Description: 
 */
import React from 'react'
import { SlotProps } from './ConfigCtn'
interface ConfigItemProps extends SlotProps {
    label: string
}
function ConfigItem(props: ConfigItemProps) {
    return (
        <div className="flex p10 bg-white">
            <div className="w70 f13 f-grey pt10 ">{props.label}</div>
            <div className="flex-1">
                {props.children}
            </div>
        </div>
    )
}

export default ConfigItem