/*
 * @Autor: flygg123
 * @Date: 2022-05-20 10:31:39
 * @LastEditTime: 2022-05-25 15:13:37
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import ConfigItem from '../Global/ConfigItem'
import SchemaColor from "@/custom-schema-template/components/SchemaColor"
import { useDispatch, useSelector } from 'react-redux'
import { Project, setItem } from '@/store/module/project'
import { IStoreState } from '@/store/types'
import { ColorChangeHandler, ColorResult } from 'react-color'
function index() {
    const dispatch = useDispatch()
    const project = useSelector((state: IStoreState) => state.project)
    const valueChange: ColorChangeHandler = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(color)
        dispatch(setItem((draft: Project) => {
            draft.config.backgroundColor = color.hex
        }))
    }
    return (
        <div className="p10">
            <SchemaColor valueChange={valueChange} label="背景色" value={project.config?.backgroundColor} />
        </div>
    )
}

export default index