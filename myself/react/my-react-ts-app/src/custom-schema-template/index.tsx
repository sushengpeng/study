/*
 * @Autor: flygg123
 * @Date: 2022-05-20 10:38:24
 * @LastEditTime: 2022-05-30 10:38:10
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { contextBox } from '@/components/Control'
import { SlotProps } from '@/components/Global/ConfigCtn'
import { setItem, Project } from '@/store/module/project'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import SchemaNumber from "./components/SchemaNumber"
import SchemaObject from "./components/SchemaObject"
import SchemaColor from "./components/SchemaColor"
import SchemaSelect from "./components/SchemaSelect"
import { useSelector } from 'react-redux'
import { IStoreState } from '@/store/types'
import SchemaString from './components/SchemaString'
import SchemaTime from './components/SchemaTime'
import SchemaSwitch from './components/SchemaSwitch'
interface CustomSchemaTemplate {
    schema: SchemaChild
    _key?: string
}
export interface Schema {
    type: 'object' | 'number' | 'color' | 'select' | 'string' | 'time' | 'switch'
    label: string
    child: SchemaChild
    value: any
    data?: any
}
interface SchemaChild {
    [key: string]: Schema
}
function CustomSchemaTemplateIndex(props: CustomSchemaTemplate) {
    let { schema } = props
    const ctx = useContext(contextBox)
    let { id } = ctx.currWidget
    // console.log('ctx', ctx)
    // console.log('props', props)
    let objectKeys = Object.keys(schema || {})
    let { curPage } = useSelector((state: IStoreState) => state.project)
    const getObjectValue = (id: string, key: string): any => {
        let item = curPage.componentList?.find((item: any) => item.id === id)
        let keyList = key.split('.')
        let value = item as any
        for (let i = 0; i < keyList.length; i++) {
            value = value[keyList[i]] || ''
        }
        return value
    }
    return (
        <ul>
            {
                objectKeys.map((key: string, index: number) => {
                    let itemObject = schema[key]
                    let _key = (props._key ? (props._key + '.') : '') + key
                    let value = getObjectValue(id, _key)
                    // console.info('itemObject',ctx)
                    return <li key={index}>
                        {
                            <CustomSchemaComponents schema={itemObject} _key={_key} id={id} value={value}>
                                {
                                    itemObject.child ? <CustomSchemaTemplateIndex schema={itemObject.child} _key={_key} /> : null
                                }
                            </CustomSchemaComponents>
                        }
                    </li>
                })
            }
        </ul>
    )
}
interface CustomSchemaComponentsProps extends SlotProps {
    schema: Schema
    _key: string
    id: string
    value: string
}
function CustomSchemaComponents(props: CustomSchemaComponentsProps) {
    // const dispatch = useDispatch()
    // console.log(props)
    const valueChange = (value: any) => {
        // console.log(value, props)
        // dispatch(setItem((draft: Project) => {
        //     let list = draft.curPage.componentList?.map((item: any, index: number) => {
        //         if (item.id === id) {
        //             item.value = value
        //         }
        //         return item
        //     })
        //     draft.curPage.componentList = list
        // }))
        // ctx.setCurrWidget(draft.curPage.componentList.find(
        //     (item) => id == item.id
        // ))
        // console.log(props)
    }
    switch (props.schema.type) {
        case 'object':
            return <SchemaObject {...props}>
                {props.children}
            </SchemaObject>
        case 'number':
            return <SchemaNumber {...props}>
                {props.children}
            </SchemaNumber>
        case 'color':
            return <SchemaColor {...props} >
                {props.children}
            </SchemaColor>
        case 'select':
            return <SchemaSelect {...props} >
                {props.children}
            </SchemaSelect>
        case 'string':
            return <SchemaString {...props} >
                {props.children}
            </SchemaString>
        case 'time':
            return <SchemaTime {...props} >
                {props.children}
            </SchemaTime>
        case 'switch':
            return <SchemaSwitch {...props} >
                {props.children}
            </SchemaSwitch>
        default:
            return <p>{props.schema.type}</p>
    }
}
export default CustomSchemaTemplateIndex