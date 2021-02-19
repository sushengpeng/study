import React, { Component } from 'react'

export default class Opacity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
  }
  opacityDown = () => {
    let opacity = this.state.opacity
    let timmer = setInterval(() => {
      opacity = (opacity - 0.1) > 0 ? (opacity - 0.1) : 0
      if (!opacity) {
        clearInterval(timmer)
      }
      this.setState({
        opacity: opacity
      })
    }, 100)
  }
  render() {
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>消失的文本</h2>
        <button onClick={this.opacityDown}>消失</button>
      </div>
    )
  }
}
