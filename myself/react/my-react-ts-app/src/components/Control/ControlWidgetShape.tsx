/*
 * @Autor: flygg123
 * @Date: 2022-05-15 20:59:15
 * @LastEditTime: 2022-06-01 16:07:39
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
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { IStoreState } from "@/store/types"
import { Project, setItem } from "@/store/module/project"
import { cloneDeep } from "lodash"
function ControlWidgetShape(props: ControlWidgetShapeProps) {
    const { data } = props
    // console.log(data)
    const ctx = useContext(contextBox)
    const dispatch = useDispatch()
    const { curPage } = useSelector((state: IStoreState) => state.project)
    const delComponent = (id: number | string) => {
        ctx.setCurrWidget({})
        dispatch(setItem((draft:Project)=>{
            // let _draft = cloneDeep(draft)
            draft.curPage.componentList = draft.curPage.componentList?.filter((item:any)=>item.id !== id)
            console.log(draft)
            return draft
        }))
    }
    return (
        <div className="shape">
            {
                data?.component != 'waiting'
                    ? <div className="shape-tab">
                        {

                            ctx.currWidget && ctx.currWidget.id == data.id
                                ? <DeleteFilled onClick={() => delComponent(data.id)} />
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