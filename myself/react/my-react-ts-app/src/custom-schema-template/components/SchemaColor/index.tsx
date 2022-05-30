/*
 * @Autor: flygg123
 * @Date: 2022-05-23 13:51:35
 * @LastEditTime: 2022-05-26 16:47:51
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import ConfigItem from '@/components/Global/ConfigItem'
import { setComponentItem } from '@/store/module/project'
import React, { useEffect, useState } from 'react'
import { ColorChangeHandler, ColorResult, SketchPicker } from 'react-color'
import { useDispatch } from 'react-redux'
import { SchemaObjectProps } from '../SchemaObject'
import './index.scss'
interface SchemaColorProps extends SchemaObjectProps {
    id: string
    _key: string
    value?: string
    label?: string
}
function index(props: SchemaColorProps) {
    // console.log(props)
    const [show, setShow] = useState<boolean>(false)
    const dispatch = useDispatch()
    const handleChange: ColorChangeHandler = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setComponentItem({ id: props.id, key: props._key, data: color.hex }))
    }

    useEffect(() => {
        let mainBody = document.getElementsByClassName('main-body')[0]
        const handle = (e: Event) => {
            // console.log(e)
            // @ts-ignore
            let arr: array = e.path.map(item => item.className)
            if (!arr.includes('sketch-picker colorPick')) {
                mainBody.removeEventListener('click', handle, false)
                setShow(false)
            }
        }
        if (show) {
            mainBody.addEventListener('click', handle, false)
        }
        return () => {
            mainBody.removeEventListener('click', handle, false)
        }
    }, [show])
    return (
        <ConfigItem label={props.label || props.schema.label}>
            <div
                className="flex colorContent"
                style={{ width: '100%' }}
            >
                <div className="colorBox" style={{ backgroundColor: props.value }} onClick={() => setShow(!show)}>
                </div>
                {show ? <SketchPicker color={props.schema.value || props.value} onChange={handleChange} className="colorPick" /> : null}
            </div>
        </ConfigItem>

    )
}

export default index