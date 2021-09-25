import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import "@/styles/myButton.less"
export default class MyButton extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      className: ['normal', this.props.round ? 'round' : "", this.props.class].join(" ")
    }
  }
  // static defaultProps = {
  //   buttonText: PropTypes.string.isRequired,
  //   buttonClick: PropTypes.func.isRequired
  // }
  render() {
    return (
      <button
        onClick={this.props.buttonClick}
        className={this.state.className}
        style={{ color: this.props.textColor }}
      >{this.props.children}</button>
    )
  }
}
