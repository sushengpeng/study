import React, { Component } from 'react'
import { getImg } from "@/utils/tools"
import { NavLink } from 'react-router-dom'
import '@/styles/nav.less'
export default class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      show: true
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  tabChange(index) {
    this.setState({
      activeIndex: index
    })
  }
  render() {
    let navList = [
      {
        img: '/src/images/home/index2.png',
        active_img: '/src/images/home/index.png',
        text: "首页",
        route: '/index'
      },
      {
        img: '/src/images/home/classify2.png',
        active_img: '/src/images/home/classify.png',
        text: "分类",
        route: '/classify'
      },
      {
        img: '/src/images/home/discovery2.png',
        active_img: '/src/images/home/discovery.png',
        text: "发现",
        route: '/discovery'
      },
      {
        img: '/src/images/home/buycar2.png',
        active_img: '/src/images/home/buycar.png',
        text: "购物车",
        route: '/buycar'
      },
      {
        img: '/src/images/home/mine2.png',
        active_img: '/src/images/home/mine.png',
        text: "我的",
        route: '/mine'
      },
    ]
    if (this.state.show) {
      return (
        <div div className='nav' >
          {
            navList.map((item, index) => {
              return (
                <NavLink key={index} activeClassName="nav-item_active" className="nav-item" to={item.route} onClick={this.tabChange.bind(this, index)}>
                  <img src={getImg(this.state.activeIndex!==index?item.img:item.active_img)} alt="" className='nav-img' />
                  <span className='nav-text'>{item.text}</span>
                </NavLink>
              )
            })
          }
        </div >
      )
    } else {
      return ""
    }
  }
}
