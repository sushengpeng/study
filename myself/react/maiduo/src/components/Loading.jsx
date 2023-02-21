import React, { Component } from 'react'
import "@/styles/loading.less"
import { connect } from "react-redux"
import { addTodo } from "@/redux/actions/index.js"
const loaingImg = require("../assets/loading.png")
class Loading  extends Component {
  componentDidMount(){
    // if(this.props.loading){
    //   console.log(1111)
    // }
    // setTimeout(()=>{
    //   this.props.addTodo()
    // },20000)
  }
  render() {
    let { loading } = this.props
    return (
      <div className='loading' style={{"display":loading?"none":"block"}}>
        <img src={loaingImg} className="loadingImg" />
      </div>
    )
  }
}
export default connect(
  (state)=>({
    loading: state.loading
  }),{addTodo})(Loading) 