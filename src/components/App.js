import React, { Component } from 'react';
import '../style/App.css';
import Toolbar from '../components/Toolbar';
import MessageList from '../components/MessageList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [1,2,3]
    }
  }
async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({ messages: json });
}

messageSelected = (id) => {
  console.log('messageSelected', id)
  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.selected = !message.selected;
    }
    return message;
  })
  this.setState({
    messages: updatedMessages
  })
}

markAsUnread = (id) => {
    console.log('markAsUnread')
    let selectedMessages = this.state.messages.filter(message => message.selected === true)
    console.log('selectedMessages', selectedMessages)
    selectedMessages.forEach(message => this.messageUnread(message.id))
}

messageUnread = async (id) => {
    console.log('messageUnread', id)

    let message = {
        messageIds: [id],
        command: "unread",
        "read": false
    }
    const updatedUnread = this.state.messages.map(message => {
    if (message.id === id) {
        console.log("lol")
      message.read = false;
    }
    return message;
  })
  this.setState({
    messages: updatedUnread
  })
}

markAsRead = (id) => {
  console.log('markAsRead')
  let selectedMessages = this.state.messages.filter(message => message.selected === true)
  console.log('selectedMessages', selectedMessages)
  selectedMessages.forEach(message => this.messageRead(message.id))
}

messageRead = async (id) => {
  console.log('messageRead', id)

  let message = {
    messageIds: [id],
    command: "read",
    "read": true
  }

  const result = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.read = true;
    }
    return message;
  })
  this.setState({
    messages: updatedMessages
  })
}
  render() {
    return (
      <div className="App">
        <Toolbar markAsUnread={this.markAsUnread} markAsRead={this.markAsRead}/>
        <MessageList messages={this.state.messages} messageUnread={this.messageUnread} messageRead={this.messageRead} messageSelected={this.messageSelected}/>
      </div>
    );
  }
}

export default App;
