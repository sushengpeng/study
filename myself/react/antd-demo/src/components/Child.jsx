import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
    }
    editText=()=>{
        this.props.clickChange("这里是子组件里面传的值")
    }
    render() {
        return (
            <div>
                {this.props.text}
                <button onClick= { this.editText }>修改父组件里面的值</button>
            </div>
        )
    }
}
