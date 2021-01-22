import React, { Component } from 'react'
import InputTodo from './InputTodo'
import ShowList from './ShowList'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: []
    }
  }
  addTodo = (item) => {
    console.log(item)
    const { toDoList } = this.state
    toDoList.unshift(item)
    this.setState({
      toDoList: toDoList
    })
  }
  delItem = (e) => {
    console.log(e)
    // const { toDoList } = this.state
    // toDoList.splice(index, 1)
    // this.setState({
    //   toDoList: toDoList
    // })
  }
  render() {
    return (
      <div>
        <h2>todoList</h2>
        <InputTodo addTodo={this.addTodo} />
        <ShowList toDoList={this.state.toDoList} delItem={this.delItem}/>
      </div>
    )
  }
}
