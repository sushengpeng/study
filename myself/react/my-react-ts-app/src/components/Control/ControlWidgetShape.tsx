/*
 * @Autor: flygg123
 * @Date: 2022-05-15 20:59:15
 * @LastEditTime: 2022-05-30 14:03:22
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { useContext, useEffect } from "react"
import { SlotProps } from "../Global/ConfigCtn"
import { DeleteFilled } from "@ant-design/icons"
import "./styles/ControlWidgetShape.scss"
interface ControlWidgetShapeProps extends SlotProps {
    data: any
}
import { contextBox } from "./index"
function ControlWidgetShape(props: ControlWidgetShapeProps) {
    const { data } = props
    // console.log(data)
    const ctx = useContext(contextBox)
    const delComponent = (id: number | string) => {

    }
    return (
        <div className="shape">
            {
                data?.component != 'waiting'
                    ? <div className="shape-tab">
                        {

                            ctx.currWidget && ctx.currWidget.id == data.id
                                ? <DeleteFilled  onClick={() => delComponent(data.id)} />
                                : <span>{data.name}</span>
                        }
                    </div>
                    : null
            }
            {props.children}
        </div >
    )
}

export default ControlWidgetShape