import React from 'react';
import PropTypes from 'prop-types';
// function MyReactComponent(props) {
//   const { name, mark } = props;
//   let save = () =>{
//     console.log(111)
//   }
//   return <h1>Hello <code onClick = {save}>{name}</code>{mark}</h1>;
// }
class MyReactComponent extends React.Component {
  state = {
    other: 1111
  }
  render() {
    const { name, mark } = this.props;
    let save = () => {
      console.log(111)
    }
    let increaseCount = () => {
      this.setState({ other: this.state.other + 1 });
    };
    return <h1>Hello <code onClick={save}>{name}</code> <span onClick={increaseCount}>{this.state.other}</span>{mark}</h1>;
  }
}

MyReactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  mark: PropTypes.string,
}
MyReactComponent.defaultProps = {
  mark: '!'
}
export default MyReactComponent;