/*
 * @Autor: flygg123
 * @Date: 2022-05-15 20:57:53
 * @LastEditTime: 2022-06-01 17:25:08
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { IStoreState } from '@/store/types'
import { getRandomCode } from '@/utils/utils'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { cloneDeep } from 'lodash'
import { contextBox } from '.'
import "./styles/ControlWidgets.scss"
function ControlWidgets(props: any) {
  const { initializing } = useSelector((state: IStoreState) => state.widget)
  // console.log(initializing)
  const ctx = useContext(contextBox)
  const { curPage } = useSelector((state: IStoreState) => state.project)
  const dragStart = (e: any) => {
    let widgetName = e.target.dataset.component
    let cmp = cloneDeep(initializing[widgetName])
    cmp.id = getRandomCode(6)
    ctx.setDragWidget(cmp)
    ctx.setDragStatus(true)
  }
  useEffect(() => {
    if (!ctx.dragStatus && ctx.dragWidget) {
      ctx.setCurrWidget(ctx.dragWidget)
      ctx.setDragWidget(null)
    }
  }, [curPage.componentList])
  const dragEnd = () => {
    ctx.setDragStatus(false)
    // console.log(ctx.dragWidget)
    // ctx.setCurrWidget(ctx.dragWidget)
  }
  return (
    <div className="wrap">
      <div className="w-100 h-100 p16 bg-white">
        <ul className="flex flex-wrap">
          {
            Object.values(initializing).map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  className="item"
                  data-component={item.component}
                  draggable
                  onDragStart={dragStart}
                  onDragEnd={dragEnd}>
                  <i className={`iconfont ${item.icon}`}></i>
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

// export default ControlWidgets
export default ControlWidgets