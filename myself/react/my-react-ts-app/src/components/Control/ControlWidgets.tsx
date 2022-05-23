/*
 * @Autor: flygg123
 * @Date: 2022-05-15 20:57:53
 * @LastEditTime: 2022-05-16 15:47:14
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { IStoreState } from '@/store/types'
import { connect } from 'react-redux'
import "./styles/ControlWidgets.scss"
function ControlWidgets(props: any) {
  const { initializing } = props
  console.log(initializing)
  const dragStart = () => { }
  const dragEnd = () => { }
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
                  <span>{ item.name }</span>
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
export default connect((state: IStoreState) => {
  return {
    initializing: state.widget.initializing
  }
})(ControlWidgets)