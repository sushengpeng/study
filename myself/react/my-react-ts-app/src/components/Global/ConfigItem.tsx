/*
 * @Autor: flygg123
 * @Date: 2022-05-13 16:27:28
 * @LastEditTime: 2022-05-26 20:16:13
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import { SlotProps } from './ConfigCtn'
interface ConfigItemProps extends SlotProps {
    label: string
    style?: any
}
function ConfigItem(props: ConfigItemProps) {
    return (
        <div className="flex bg-white p10" style={{ alignItems: 'center', ...props.style }}>
            <div className="w70 f13 f-grey">{props.label}</div>
            <div className="flex-1 flex" style={{ justifyContent: 'space-between' }}>
                {props.children}
            </div>
        </div>
    )
}

export default ConfigItem