import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getImg } from "@/utils/tools"
import "@/styles/ProductItem.less"
export default class ProductItem extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  static defaultProps = {
    showTab: true
  }
  render() {
    return (
      <div className="killItem">
        <div className="top">
          <img src={this.props.item.goods_long_img?this.props.item.goods_long_img:this.props.item.product_long_logo} alt="" className="killImg" />
          {
            this.props.showTab ? (<img src={this.props.item.icon_url} alt="" className="killIcon" />) : ""
          }
        </div>
        <div className="bottom">
          <div className="left">
            <p className="productName">{this.props.item.goods_name||this.props.item.product_name}</p>
            <div className="detail">
              {
                this.props.showTab ? (<p className="tab">秒杀</p>) : ""
              }
              <p className="price">￥{this.props.item.goods_price||this.props.item.product_price}</p>
              <s className="delPrice">￥{this.props.item.product_market_price}</s>
            </div>
          </div>
          {
            this.props.showTab ? (
              <div className="right" style={{ background: `url('${getImg('src/images/home/home-hot-btn-0.png')}') no-repeat` }}></div>
            ) : (
                <div className="right" style={{ background: `url('${getImg('src/images/home/home-list-btn-0.png')}') no-repeat` }}></div>
              )
          }
        </div>

      </div>
    )
  }
}
