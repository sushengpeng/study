import React, { FC, useState  } from 'react';
import { Button } from 'antd';
const App: React.FC<{}> = () =>{
  const [createModalVisible, handleModalVisible] = useState<boolean>(false); 
  console.log(createModalVisible)
  return (
    <div className="App">
       <Button type="primary">Button</Button>
    </div>    
  )

}
// class TopTip extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       topFlag: false,
//       timmerOut: null
//     }
//     this.topTipRef = React.createRef()

//   }
//   close = (e) => {
//     e.target.parentNode.className += ' remove'
//   }
//   componentDidMount() {
//     let timmerOut = setTimeout(() => {
//       this.topTipRef.current.className += ' topShow'
//     }, 2000)
//     this.setState({
//       timmerOut: timmerOut
//     })
//   }
//   componentWillUnmount() {
//     clearTimeout(this.state.timmerOut)
//   }
//   render() {
//     return (
//       <div className="topTip" ref={this.topTipRef}>
//         <Icon type="cross" size='xs' onClick={this.close} color='#942323' />
//       </div>
//     )
//   }
// }
export default App;