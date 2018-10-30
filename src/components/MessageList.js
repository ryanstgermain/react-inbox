import React from 'react';

const Message = (props) => {
    const messageItems = props.messages.map(item => {
    return (
        <div className="row message unread">
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" />
                    </div>
                    <div className="col-xs-2">
                        <i className="star fa fa-star-o"></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                <a href="#">
                    {item.subject}
                </a>
            </div>
        </div>
    );
    })
    return (
        <div>{messageItems}</div>
    );
}

export default Message;
