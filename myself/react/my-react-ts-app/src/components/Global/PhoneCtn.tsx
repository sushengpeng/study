import React from 'react'
import { SlotProps } from './ConfigCtn'
import "./styles/PhoneCtn.scss"
function PhoneCtn(props: SlotProps) {
    return (
        <div className="ctn">
            <div v-show="head" className="ctn-head"></div>
            <div className="ctn-body">
                {props.children}
            </div>
            <div className="ctn-height-tag">
                <span>iPhone 8手机高度</span>
            </div>
        </div>
    )
}

export default PhoneCtn