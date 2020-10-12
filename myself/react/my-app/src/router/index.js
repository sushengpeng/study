import React from 'react'
import { Router, Route, Link } from 'react-router'

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Index = React.createClass({
    render() {
        return (
            <div>
                <h2>Index</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="index" component={Index}>
            <Route path="messages/:id" component={Message} /></Route>
        </Route>
    </Router>
), document.body)