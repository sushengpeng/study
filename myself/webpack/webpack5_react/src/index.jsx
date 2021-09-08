import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import "reset.css"
export default class Buycar extends Component {
  render() {
    return (
      <div>
        <img src={require("./assets/image/banner.png")}></img>
      </div>
    )
  }
}
ReactDOM.render(<Buycar></Buycar>, document.getElementById("root"))