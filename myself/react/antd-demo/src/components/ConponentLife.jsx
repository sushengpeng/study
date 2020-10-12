import React, { Component } from 'react'
import Child from "./Child"
export default class conponentLife extends Component {
    constructor(props) {
        super()
        this.state = {
            num: 1,
            text: "这里是父组件里面的值"
        }
    }
    componentWillMount() {
        console.log("组件渲染前")
    }
    componentDidMount() {
        console.log("组件渲染后")
    }
    shouldComponentUpdate() {
        console.log("返回是否允许改变")
        return true
    }
    //数据在改变前执行
    componentWillUpdate() {
        console.log("数据在改变前执行")
    }
    //数据修改完成 
    componentDidUpdate() {
        console.log("数据修改完成")
    }
    //props改变前 
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }
    //组件卸载前执行
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    changeText = (val) => {
        console.log(val)
        this.setState({
            text: val
        })
    }
    render() {
        return (
            <div>
                生命周期函数
                {this.state.text}
                <Child clickChange={this.changeText} />
            </div>
        )
    }
}
