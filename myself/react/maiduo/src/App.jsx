import React, { Component } from 'react'
import IndexPages from 'pages/IndexPages'
// import TestComponent from 'pages/TestComponent'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '111',
      age: 123,
    }
  }
  render() {
    return (
      <div className='outer'>
        <IndexPages />
        {/* <TestComponent name={this.state.name} age={this.state.age} sex={this.state.sex} /> */}
        {/* <h1>111</h1> */}
      </div>
    )
  }
}

