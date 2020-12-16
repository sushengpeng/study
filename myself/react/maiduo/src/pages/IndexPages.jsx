import React, { Component } from 'react'
import { getIndexBanner } from 'api/index'
import ImageBanner from "@/components/ImageBanner"
class main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    getIndexBanner().then(res => {
      this.setState({
        bannerList: res.data
      })
    })
  }
  render() {
    return (
      <div className="outer">
        <ImageBanner data="this.state.bannerList"></ImageBanner>
      </div>
    )
  }
}
export default 
