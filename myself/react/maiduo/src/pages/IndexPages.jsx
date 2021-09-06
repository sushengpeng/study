import React, { Component } from 'react'
import { getIconList, getIndexBanner, getNewList, getNewsAndTuan, getSecondKillProduct, getSecondKillTime, getGuessYouLike } from 'api/index'
import { Icon } from 'antd-mobile';
import { getImg } from "@/utils/tools"
import "@/styles/index.less"
import ImageBanner from "../components/ImageBanner"
import ProductItem from "../components/ProductItem"
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
      timmerOut: timmerOut
    })
  }
  componentWillUnmount() {
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
      // eslint-disable-next-line
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
      pingTuanData: {},
      backgroundColor: ""
    }
  }
  componentDidMount() {
    //获取最上面的动图
    getNewList().then(res => {
      let imgList = []
      for (let key in res.data) {
        if (res.data[key].length > 0 && Array.isArray(res.data[key])) {
          imgList.push(res.data[key])
        } else {
          this.setState({
            backgroundColor: res.data[key]
          })
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
        <div className="CenterBanner_top">
          {
            this.state.imgList.slice(0, 1).map((item, index) => {
              return (
                <img src={item[0].banner_img} alt="" key={index} />
              )
            })
          }
        </div>
        <div className="CenterBanner_content" style={{ background: this.state.backgroundColor }}>
          {
            this.state.imgList.slice(1).map((item, index) => {
              return (
                <div className="img_item" key={index} >
                  {
                    Array.isArray(item) ? item.map((img) => {
                      return (
                        <div className="img">
                          <img src={img.banner_img} alt="" />
                        </div>
                      )
                    }) : ""
                  }
                </div>
              )
            })
          }
        </div>

        <div className="pingtuan_product"
          style={{ background: `url(${this.state.pingTuanData?.newpinbackground?.banner_img}) no-repeat` }}>
          <ImageBanner className='pingtuan_banner' loop={false} needPagination={false}>
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
    this.state = {
      killProductList: [],
      killTime: [],
      activeIndex: 1,
      page: 1,//为你推荐
      likeTitle: '',//为你推荐标题
      likeList: [],
    }
  }
  async componentDidMount() {
    this.scrollView()
    window.addEventListener('scroll', this.scrollView, false)
    let params = {}
    await getSecondKillTime().then(res => {
      this.setState({
        killTime: res.data.data
      })
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].active === 1) {
          params.activity_id = res.data.data[i].activity_id
          this.setState({
            activeIndex: i
          })
          break;
        }
      }
      this.getKillTime(params)
    })
    await getGuessYouLike({ page: this.state.page }).then(res => {
      this.setState({
        likeList: res.data.products,
        likeTitle: res.data.title
      })
    })
  }
  activeChange(item, index) {
    // console.log(item)
    this.setState({
      activeIndex: index
    })
    this.getKillTime(item.activity_id)
  }
  getKillTime(id) {
    let params = {
      activity_id: id
    }
    getSecondKillProduct(params).then(res => {
      this.setState({
        killProductList: res.data
      })
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollView, false)
  }
  scrollView() {
    let lazyImages = [...document.getElementsByClassName("lazyImage")]
    var observer = new IntersectionObserver(
      function (changes) {
        changes.forEach((change, index) => {
          var container = change.target;
          // console.log(change.intersectionRatio)
          if (change.intersectionRatio > 0) {
            container.setAttribute("src", container.getAttribute("data-src"))
            container.removeAttribute("data-src")
            container.className = container.className.replace(/lazyImage/, '').trim()
          }
          // var content = container.querySelector('template').content;
          // container.appendChild(content);
          observer.unobserve(container);
        });
      }
    );
    lazyImages.forEach(function (item) {
      observer.observe(item);
    })
  }
  render() {
    return (
      <div className='killContent'>
        <div className="topTitle">
          <img src={getImg("/src/images/home/clock.png")} alt="" />
          <span>热卖爆款 · 特价秒杀</span>
        </div>
        <ImageBanner className='timeLine'
          loop={false}
          needPagination={false}
          autoplay={false}
          slidesPerView={5}
          initialSlide={this.state.activeIndex - 2}
        >
          {
            this.state.killTime.map((item, index) => {
              return (
                <div className={`swiper-slide timeLineItem ${this.state.activeIndex === index ? 'active' : ''}`} key={index} onClick={this.activeChange.bind(this, item, index)}>
                  <p className="time">{item.time}</p>
                  <p className="text">{item.text}</p>
                </div>
              )
            })
          }
        </ImageBanner>
        <div className="killList">
          {
            this.state.killProductList.map((item, index) => {
              return (
                <ProductItem item={item} key={index}></ProductItem>
              )
            })
          }
        </div>
        <div className="likeList">
          <div className="title">
            <i>
              <img src={getImg('src/images/home/tuijian.png')} alt="" />
            </i>
            <span>麦朵商城·为你推荐</span>
          </div>
          {
            this.state.likeList.map((item, index) => {
              return (
                <ProductItem item={item} key={index} showTab={false}></ProductItem>
              )
            })
          }
        </div>
      </div>
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
