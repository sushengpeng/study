/*
 * @Autor: flygg123
 * @Date: 2022-05-25 08:54:27
 * @LastEditTime: 2022-05-26 16:56:23
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { SlotProps } from '@/components/Global/ConfigCtn'
import { Schema } from '@/custom-schema-template'
import style from "./index.module.scss"
export interface SchemaObjectProps extends SlotProps {
    schema: Schema
    value?: string
}

function SchemaObjectIndex(props: SchemaObjectProps) {
    return (
        <div className={style.wrap}>
            <div className={style['wrap-label']}>
                <span>{props.schema.label}</span>
            </div>

            <div className={style['wrap-body']}>
                {props.children}
                <div
                    className="wrap-line"
                ></div>
            </div>
        </div>
    )
}

export default SchemaObjectIndex