import React, { Component } from 'react'
import { createRef } from 'react'

export default class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }
  toAdd = () => {
    this.props.addTodo(this.inputRef.current.value)
    this.inputRef.current.value = ""
  }
  render() {
    return (
      <div>
        <input placeholder="请输入要执行的任务" type="text" ref={this.inputRef} />
        <button onClick={this.toAdd}>按钮</button>
      </div>
    )
  }
}
