import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "@/styles/myButton.less"
export default class MyButton extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  static defaultProps = {
    buttonText: PropTypes.string.isRequired
  }
  buttonClick(status) {
    console.log(status)
  }
  render() {
    return (
      <button onClick={this.props.buttonClick}>{this.props.buttonText}</button>
    )
  }
}
