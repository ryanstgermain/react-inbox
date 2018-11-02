import React from 'react';
import '../style/App.css';

const Message = (props) => {
  return (
        <div className={props.message.read ? "row message read" : "row message unread"}>
            <div className="col-xs-1">
                <div className="row">
                <div className="col-xs-2">
                    <input type="checkbox" onClick={() => props.messageSelected(props.message.id)} checked={(typeof props.message.selected !== "undefined") && props.message.selected === true ? "checked" : ""} />
                </div>
                <div className="col-xs-2">
                    <i className="star fa fa-star-o"></i>
                </div>
                </div>
            </div>
            <div className="col-xs-11" onClick={() => props.messageRead(props.message.id)}>
                <a href="#">
                {props.message.subject}
                </a>
            </div>
        </div>
    );
}

export default Message;
