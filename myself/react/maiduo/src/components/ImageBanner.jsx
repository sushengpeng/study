import React, { Component } from 'react'
import { getIndexBanner } from 'api/index'
import { Carousel, WingBlank } from 'antd-mobile';
export default class ImageBanner extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      bannerList:[]
    }
  }
  componentDidMount() {
    getIndexBanner().then(res => {
      this.setState({
        bannerList: res.data.data
      })
      console.log(this.state)
    })
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.bannerList.map(val=> (
            <a
              key={val}
              href={val}
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={val.banner_img}
                alt={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}
