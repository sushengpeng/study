import React, { Component } from 'react'

export default class About extends Component {
  componentDidMount(){
    console.log('about页面显示')
  }
  componentWillUnmount(){
    console.log('about解除')
  }
  render() {
    return (
      <div>
        这里是关于页面
      </div>
    )
  }
}
