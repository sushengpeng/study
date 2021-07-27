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
          <MyButton buttonText='下一步' buttonClick={this.buttonClick.bind(this)}></MyButton>
        </div>
      </div>
    )
  }
}
// Classify.contextType = MyContext
export default Classify
