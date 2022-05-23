/*
 * @Autor: flygg123
 * @Date: 2022-05-13 16:27:10
 * @LastEditTime: 2022-05-20 15:19:28
 * @LastEditors: 
 * @Description: 
 */
import React from 'react'
import SlotItem from "@/components/SlotItem"
import "./styles/ConfigCtn.scss"
interface Props extends SlotProps {
    title: String

}
export interface SlotProps {
    children: React.ReactNode;
}
function ConfigCtn(props: Props) {
    return (
        <div className="decorate">
            <div className="decorate-head">
                {props.title}
            </div>

            <div className="decorate-body">
                {/* <SlotItem children={props.children} /> */}
                {props.children}
            </div>
        </div>
    )
}

export default ConfigCtn