
import React, { Component } from 'react'

export default class MyNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    add = () => {
        let num = this.state.num+1
        this.setState({
            num: num
        })
    }
    sub = () => {
    let num = this.state.num-1
        this.setState({
            num:num
        })
    }
    render() {
        // console.log(this.props.nav)
        return (
            <div>
                <ul>
                    {
                        this.props.nav.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                <span>{this.state.num}</span>
                <button onClick={this.add}>增加</button>
                <button onClick={this.sub}>减少</button>
            </div>
        )
    }
}