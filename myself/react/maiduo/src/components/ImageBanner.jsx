import React, { Component } from 'react'
import { Swiper, Pagination, Autoplay } from 'swiper'
// Install modules
import 'swiper/swiper.less'
import 'swiper/components/pagination/pagination.less'
import 'swiper/components/navigation/navigation.less'
Swiper.use([Pagination, Autoplay])

export default class ImageBanner extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.state = {
      number: Math.floor(Math.random() * 10000)
    }
  }
  static propTypes = {
  }
  static defaultProps = {
    loop: true,
    needPagination: true,
    autoplay: true,
    slidesPerView: 1,
    initialSlide: 0
  }
  componentDidUpdate() {
    new Swiper('.' + this.props.className, {
      loop: this.props.loop, // 循环模式选项
      // 如果需要分页器
      autoplay: this.props.autoplay,
      pagination: {
        el: this.props.needPagination ? `.swiper-pagination_${this.state.number}` : "",
      },
      centeredSlides: this.props.slidesPerView === 1,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      spaceBetween: 1,
      slidesPerView: this.props.slidesPerView,
      initialSlide: this.props.initialSlide
    })
    // console.log(`.swiper-pagination_${this.state.number}`)
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
        <div className={`swiper-pagination_${this.state.number} swiper-pagination`} ></div>
      </div>
    )
  }
}
