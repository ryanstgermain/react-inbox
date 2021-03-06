import React from 'react';
import '../style/App.css';
import Message from './Message';

const MessageList = (props) => {
  return (
    props.messages.map(message => {
        return <Message message={message} messageUnread={props.messageUnread} messageRead={props.messageRead} messageSelected={props.messageSelected} />
    })
  );
}

export default MessageList;
