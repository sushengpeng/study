import React from 'react'
class DemoInput extends React.Component {
    state = {
        value: ""
    }

    render() {
        let inputChange = (e) => {
            this.setState({
                value: e.target.value
            })
        }
        useEffect(() => {
            console.log(1111)
        })
        return <input type="text" value={this.value} onChange={inputChange} />;
    }
}
export default DemoInput;