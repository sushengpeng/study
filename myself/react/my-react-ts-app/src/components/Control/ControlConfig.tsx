/*
 * @Autor: flygg123
 * @Date: 2022-05-15 20:58:58
 * @LastEditTime: 2022-05-30 16:13:30
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { IStoreState } from "@/store/types"
import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { contextBox } from "./index"
import ConfigCtn from "../Global/ConfigCtn"
import PageConfig from "../PageConfig"
import CustomSchemaTemplate from "@/custom-schema-template"
function ControlConfig() {
    const ctx = useContext(contextBox)
    const widget = useSelector((state: IStoreState) => state.widget)
    const [curSchema, setCurSchema] = useState<any>({})
    useEffect(() => {
        // debugger
        console.log('ctx.currWidget',ctx.currWidget)
        setCurSchema(widget.fields[ctx.currWidget.component])
    }, [ctx])
    return (
        <div className="Config">
            {
                ctx.currWidget?.id
                    ? <ConfigCtn title={ctx.currWidget.name}>
                        <CustomSchemaTemplate schema={curSchema} />
                    </ConfigCtn>
                    : <ConfigCtn title='页面配置'>
                        <PageConfig></PageConfig>
                    </ConfigCtn>
            }
        </div>
    )
}

export default ControlConfig