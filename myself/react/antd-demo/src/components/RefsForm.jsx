import React, { Component } from 'react'

export default class refsForm extends Component {
    constructor(){
        super()
        this.username = React.createRef()
    }
    clickHandler = () => {
        console.log(this.username.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.username} type="text"></input>
                <button onClick={this.clickHandler}>按钮</button>
            </div>
        )
    }
}
