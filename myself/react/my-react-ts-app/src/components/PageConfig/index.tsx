/*
 * @Autor: flygg123
 * @Date: 2022-05-20 10:31:39
 * @LastEditTime: 2022-05-20 10:32:27
 * @LastEditors: 
 * @Description: 
 */
import React from 'react'
import ConfigItem from '../Global/ConfigItem'
function index() {
    return (
        <div className="p10">
            <ConfigItem label='背景色'>
                {/* <config-color-picker v-model="project.config.backgroundColor"></config-color-picker> */}
            </ConfigItem>
        </div>
    )
}

export default index