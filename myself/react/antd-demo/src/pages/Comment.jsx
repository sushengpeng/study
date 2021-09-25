import React, { Component } from 'react'
import { Input } from 'antd';
const { Search } = Input
class SetInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CommentContent: "",
      UserName: ""
    }
    // console.log(this.props)
    this.inputChange = this.inputChange.bind(this)
    // this.submit = this.submit.bind(this)
  }
  inputChange = (e) => {
    // console.log(e.target.value)
  }
  render() {
    return (
      <div className="setInput">
        <Search
          addonBefore={this.props.label}
          enterButton="提交"
          allowClear
          onChange={this.inputChange}
          placeholder="请输入姓名"
          style={{ "marginTop": '20px', "width": "400px" }}
          onSearch={this.props.submit}
        ></Search>
      </div>
    )
  }
}
export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.sendMessage = this.sendMessage.bind(this)
    this.getMessage = this.getMessage.bind(this)
    this.state = {
      msgList: []
    }
  }
  sendMessage(value) {
    this.setMsg('send', value)
  }
  getMessage(value) {
    // console.log('getMessage', value)
    this.setMsg('get', value)
  }
  setMsg(type, val) {
    let { msgList } = this.state
    let item = {
      type: type,
      value: val
    }
    console.log(msgList)
    msgList.push(item)
    console.log(msgList)
    this.setState({
      msgList: msgList
    })
  }
  render() {
    return (
      <div className="outer">
        <SetInput label="接收方" submit={this.getMessage}></SetInput>
        <SetInput label="发送方" submit={this.sendMessage}></SetInput>
        <div className="content" style={{ "width": "400px", "marginTop": "20px" }}>
          {
            this.state.msgList.map((item, index) => {
              return (
                <div
                  style={{ "maxWidth": "400px", "border": "1px solid black", "borderRadius": "10px", "padding": "10px" }}
                  className={item.type}
                  key={index}
                >
                  <p>{item.value}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
