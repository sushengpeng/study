import React, { Component } from 'react'

export default class asyncState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    add = async () => {
        await this.asyncSetState({ count: this.state.count+1 })
        console.log(this.state.count)
    }
    asyncSetState = async (state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick = { this.add }>按钮</button>
            </div>
        )
    }
}
