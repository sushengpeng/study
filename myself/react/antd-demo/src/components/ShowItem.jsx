import React, { Component } from 'react'

export default class ShowItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    changeFlag = () => {
        let flag = !this.state.flag
        this.setState({
            flag: flag
        })
        console.log(this.state.flag)
    }
    render() {
        return (
            <div>
                {/* {
                    this.state.flag
                        ? (<span>展示这个标签</span>)
                        : (<span>不展示这个标签</span>)
                } */}
                <span style={this.state.flag?'display:block':'display:none'}>这个标签隐藏</span>
                <span style={!this.state.flag?'display:block':'display:none'}>这个标签显示</span>
                <button onClick={this.changeFlag}>按钮</button>
            </div>
        )
    }
}
