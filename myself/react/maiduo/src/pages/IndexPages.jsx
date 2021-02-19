import React, { Component } from 'react'
import { getIconList, getIndexBanner, getNewList, getNewsAndTuan } from 'api/index'
import { Icon } from 'antd-mobile';
import "@/styles/index.less"
import ImageBanner from "../components/ImageBanner"
const chunk = require('lodash/chunk')
//头部banner
class TopTip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topFlag: false,
      timmerOut: null
    }
    this.topTipRef = React.createRef()

  }
  close = (e) => {
    e.target.parentNode.className += ' remove'
  }
  componentDidMount() {
    let timmerOut = setTimeout(() => {
      this.topTipRef.current.className += ' topShow'
    }, 2000)
    this.setState({
      timmerOut:timmerOut
    })
  }
  componentWillUnmount(){
    clearTimeout(this.state.timmerOut)
  }
  render() {
    return (
      <div className="topTip" ref={this.topTipRef}>
        <Icon type="cross" size='xs' onClick={this.close} color='#942323' />
      </div>
    )
  }
}

class BannerImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      activeIndex: 0,
      backgroundImg: null
    }
  }
  componentDidMount() {
    getIndexBanner().then(res => {
      this.setState({
        bannerList: res.data,
        backgroundImg: res.data[0]?.banner_backimg
      })
    })
  }
  bannerChange(index, banner) {
    // console.log(index, banner)
    this.setState({
      activeIndex: index,
      backgroundImg: banner
    })
  }
  render() {
    return (
      <div className="BannerImg" style={{ background: `url(${this.state.backgroundImg}) no-repeat` }, { backgroundSize: '100% 100%' }}>
        <ImageBanner bannerChange={this.bannerChange.bind(this)} className='image_banner'>
          {
            this.state.bannerList.map((val, index) => (
              <div className="swiper-slide" key={index} style={{ background: `url(${val.banner_backimg}) no-repeat`, backgroundSize: '100% 100%' }}>
                <img
                  className='banner_img'
                  src={val.banner_img}
                  alt={val.banner_title}
                />
              </div>
            ))
          }
        </ImageBanner>
      </div>
    )
  }
}
//中间菜单
class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iconList: []
    }
  }
  componentDidMount() {
    getIconList().then(res => {
      this.setState({
        iconList: res.data.banners
      })
    })
  }
  render() {
    return (
      <div className='centerIcon'>
        {
          this.state.iconList.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.banner_img} alt="" />
                {/* <span>{item.img_width}</span> */}
              </div>
            )
          })
        }
      </div>
    )
  }
}
//中间部分的图片展示
class CenterBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      pingTuanData: {}
    }
  }
  componentDidMount() {
    //获取最上面的动图
    getNewList().then(res => {
      let imgList = []
      for (let key in res.data) {
        if (res.data[key].length > 0 && Array.isArray(res.data[key])) {
          imgList.push(...imgList, ...res.data[key])
        }
      }
      this.setState({
        imgList: imgList
      })
    })
    //获取拼团数据
    getNewsAndTuan().then(res => {
      this.setState({
        pingTuanData: res.data
      })
    })
  }
  render() {
    return (
      <div className="CenterBanner">
        {
          this.state.imgList.map((item, index) => {
            return (
              <div className="img_item" key={index}>
                <img src={item.banner_img} alt="" />
                {/* <span>{item.img_width}</span> */}
              </div>
            )
          })
        }
        <div className="pingtuan_product"
          style={{ background: `url(${this.state.pingTuanData?.newpinbackground?.banner_img}) no-repeat` }}>
          <ImageBanner className='pingtuan_banner' loop={false}>
            {
              // console.log(chunk(this.state.pingTuanData?.pingtuan_products, 3))
              chunk(this.state.pingTuanData?.pingtuan_products, 3).map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    {
                      item.map((product_item, i) => {
                        return (
                          <div className="product_item" key={i}>
                            <div className="top">
                              <img src={product_item.product_logo} alt="" className='product_logo' />
                              <img src={product_item.product_icon} alt="" className='product_icon' />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </ImageBanner>
        </div>
      </div >

    )
  }
}
//产品列表展示
class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div></div>
    )
  }
}
//主体
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
      <div className="content">
        <TopTip />
        <BannerImg />
        <ItemList />
        <CenterBanner />
        <List />
      </div>
    )
  }
}
export default main
