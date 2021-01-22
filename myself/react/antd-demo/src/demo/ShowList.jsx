import React, { Component } from 'react'

export default class ShowList extends Component {
  static defaultProps = {
    toDoList: []
  }
  render() {
    return (
      <ul>
        {
          this.props.toDoList.map((item, index) =>
          (
            <li key={index} onClick={this.props.delItem}>{item}</li>
          )
          )
        }
      </ul>
    )
  }
}
