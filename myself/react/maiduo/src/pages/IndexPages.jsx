import React, { Component } from 'react'
import ImageBanner from "@/components/ImageBanner"
class main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="outer">
        <ImageBanner></ImageBanner>
      </div>
    )
  }
}
export default main;
