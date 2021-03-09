import React, { Component } from 'react'
import PropTypes from 'prop-types'
const baseUrl = require("../assets/lazy.jpg")
export default class ImageLazy extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object
  }
  static defaultProps = {
    className: "",
    style: {
      width: "100%",
      height: "auto"
    }
  }
  render() {
    const { width, height } = this.props.style
    return (
      <img
        src={baseUrl.default}
        alt=""
        data-src={this.props.src}
        style={{ width: width, height: height }}
        className={this.props.className ? (this.props.className + ' ') : "" + 'lazyImage'}
      />
    )
  }
}
