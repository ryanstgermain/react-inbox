import React, { Component } from 'react';
import '../style/App.css';
import MessageList from './MessageList'
import Toolbar from './Toolbar'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8082/api/messages')
        const json = await response.json()
        this.setState({data: json})
    }   

    messageRead = (id) => {
        console.log('messageRead', id)
        const updatedMessages = this.state.data.map(message => {
            if (message.id === id) {
                message.read = !message.read;
            }
            return message;
        })
        this.setState({
            data: updatedMessages
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Toolbar />
                <MessageList data={this.state.data} messageRead={this.messageRead}/>
            </div>
        );
    }
}

export default App;
