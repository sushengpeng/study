import React, { Component } from 'react'
<<<<<<< HEAD
import { Swiper, Pagination, Autoplay } from 'swiper'
// Install modules
import 'swiper/swiper.less'
import 'swiper/components/pagination/pagination.less'
import 'swiper/components/navigation/navigation.less'
Swiper.use([Pagination, Autoplay])
=======
>>>>>>> parent of a48c995... 文件上传

export default class ImageBanner extends Component {
  constructor(props){
    super(props)
<<<<<<< HEAD
    // console.log(this.props)
  }
  static propTypes = {
  }
  static defaultProps = {
    loop: true,
  }
  componentDidUpdate() {
    new Swiper('.'+this.props.className, {
      loop: this.props.loop, // 循环模式选项
      // 如果需要分页器
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
      centeredSlides: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      spaceBetween: 1,
    })
    // console.log(mySwiper)
  }
  render() {
    return (
      <div className={'swiper-container ' + this.props.className}>
        <div className="swiper-wrapper">
          {/* {
            this.props.bannerList.map((val, index) => (
              <div className="swiper-slide" key={index} style={{ background: `url(${val.banner_backimg}) no-repeat`, backgroundSize: '100% 100%' }}>
                <img
                  className='banner_img'
                  src={val.banner_img}
                  alt={val.banner_title}
                />
              </div>
            ))
          } */}
          {this.props.children}
        </div>
        <div className="swiper-pagination"></div>
=======
  }
  render() {
    return (
      <div className="banner-outer">
        banner
>>>>>>> parent of a48c995... 文件上传
      </div>
    )
  }
}
