import React, { Component } from 'react'
import MyButton from "@/components/MyButton.jsx"
import "@/styles/classify.less"
class Classify extends Component {
  // constructor(props,context) {
  //   super(props,context);
  // }
  buttonClick() {
    // const { store } = this.context;
    console.log(this)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className='outer'>
        <div className="btn">
          <MyButton class="test" round buttonClick={this.buttonClick.bind(this)}>下一步</MyButton>
          <MyButton class="marginLeft20">取消</MyButton>
        </div>
      </div>
    )
  }
}
// Classify.contextType = MyContext
export default Classify
