import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Compose extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                这是一个组合:{this.props.children}
            </div>
        )
    }
}
Compose.propTypes = {
    title: PropTypes.string
}
Compose.defaultTypes = {
    title: '标题'
}
