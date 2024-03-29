import React, { Component } from 'react';
import PropTypes from 'prop-types'
// const TestComponent = () => {
//   const [number, setNumber] = useState(0)
//   const addNumber = () => {
//     setNumber(number + 1)
//   }
//   return (
//     <div>
//       <p onClick={addNumber} style={{ padding: '100px', background: '#endregion' }}>{number}</p>
//     </div>
//   )
// }
// TestComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number
// }
// TestComponent.defaultProps = {
//   sex: '女',
// }
class TestComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
    this.inputRef = React.createRef()
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  }
  static defaultProps = {
    sex: '女'
  }
  textClick = () => {
    console.log(this.props)
    let { number } = this.state
    this.setState({
      number: ++number
    })
  }
  inputBlur = () => {
    console.log(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <h1 onClick={this.textClick}>{this.state.number}</h1>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.sex}</p>
        <input onBlur={this.inputBlur} type="text" placeholder="请输入内容" ref={this.inputRef} />
      </div>
    )
  }
}

export default TestComponent;