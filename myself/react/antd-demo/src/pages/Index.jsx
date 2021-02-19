import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        { text: '首页', route: "/" },
        { text: '其他', route: "/other" },
        { text: '关于', route: "/about" }
      ],
      active: 0
    }
  }
  tabClick = (index) => {
    this.setState({
      active: index
    })
  }
  render() {
    return (
      <div className='jumbotron'>
        <h1>这个是我的首页</h1>
        <ul className="nav nav-pills">
          {
            this.state.navList.map((item, index) => {
              return (
                <li role="presentation" key={index} className={this.state.active === index ? 'active' : ''}>
                  <NavLink to={item.route} onClick={this.tabClick.bind(this, index)}>{item.text}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
