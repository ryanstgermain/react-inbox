import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Message from './Message';
import MessageList from './MessageList';
import '../style/App.css';
import '../style/index.css';

class App extends Component {
    state = {
        messages: []
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:8082/api/messages')
        const json = await response.json()
        this.setState({messages: json})
  }
  render() {
    return (
      <div>
        <Toolbar />
        <MessageList />
      </div>
    );
  }
}

export default App;
