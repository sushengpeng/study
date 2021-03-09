import React, { Component } from 'react'

export default class ImageLazy extends Component {
  constructor(props){
    super(props)
    this.state({
      baseImage:require("../assets/lazy.jpg")
    })
  }
  static propTypes = {
    imgUrl: PropTypes.string.isRequired
  }
  render() {
    return (
      <img src={this.state.baseImage} alt="" className={this.props.imgUrl}/>
    )
  }
}
