import React, { Component } from 'react'
import ImageLazy from "../components/ImageLazy"
export default class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1456111218,1910681625&fm=26&gp=0.jpg"
    }
  }
  render() {
    return (
      <div>
        <ImageLazy src={this.state.src} style={{ width: '70%', height: '200px' }}></ImageLazy>
        <ImageLazy src={this.state.src} style={{ width: '60%', height: '100px' }}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
        <ImageLazy src={this.state.src}></ImageLazy>
      </div>
    )
  }
}
