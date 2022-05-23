/*
 * @Autor: flygg123
 * @Date: 2022-05-13 14:54:33
 * @LastEditTime: 2022-05-19 17:27:56
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { createContext, useState } from 'react'
import ControlWidgets from './ControlWidgets'
import ControlPanel from './ControlPanel'
import ControlConfig from './ControlConfig'
import { IStoreState } from '@/store/types'
import { connect } from 'react-redux'
import { useEffect } from 'react'
export const contextBox = createContext<any>({})
function Control(props: any) {
    let [currWidget, setCurrWidget] = useState<any>({})
    let [dragWidget, setDragWidget] = useState<any>({})
    useEffect(()=>{
        console.log(currWidget)
    },[currWidget])
    return (
        <div className="control">
            <contextBox.Provider value={{ currWidget, setCurrWidget, dragWidget, setDragWidget }}>
                <ControlWidgets />
                <ControlPanel />
                <ControlConfig />
            </contextBox.Provider>
        </div>
    )
}

export default connect((state: IStoreState) => {
    return {
        project: state.project.project
    }
})(Control)