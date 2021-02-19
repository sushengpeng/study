import React, { Component } from 'react'
import { createRef } from 'react'

class InputTodo extends Component {
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
class ShowList extends Component {
  static defaultProps = {
    toDoList: []
  }
  render() {
    return (
      <ul>
        {
          this.props.toDoList.map((item, index) =>
          (
            <li key={index} onClick={this.props.delItem.bind(this, index)} data-index={index}>{item}</li>
          )
          )
        }
      </ul>
    )
  }
}

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: []
    }
  }
  addTodo = (item) => {
    if (!item) return
    const { toDoList } = this.state
    toDoList.unshift(item)
    this.setState({
      toDoList: toDoList
    })
  }
  delItem = (index) => {
    console.log(index)
    const { toDoList } = this.state
    toDoList.splice(index, 1)
    this.setState({
      toDoList: toDoList
    })
  }
  render() {
    return (
      <div>
        <h2>todoList</h2>
        <InputTodo addTodo={this.addTodo} />
        <ShowList toDoList={this.state.toDoList} delItem={this.delItem} />
      </div>
    )
  }
}
