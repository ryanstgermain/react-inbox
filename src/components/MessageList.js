import React from 'react';
import '../style/App.css';
import Message from './Message'

const MessageList = (props) => {
    console.log(props)
    if (props.data !== undefined) {
        return (
            props.data.map(message => {
                return <Message subject={message} messageRead={props.messageRead}></Message>
            })
        )
    } else {
        return (
            <Message></Message>
        )
    }
}

export default MessageList
