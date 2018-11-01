import React from 'react';
import '../style/App.css';

const Message = (props) => {
    console.log(props.subject)
    if (props.subject !== undefined) {
        return (
            <div className={props.subject.read ? "row message read" : "row message unread"} onClick={() => props.messageRead(props.subject.id)}>
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
                        {props.subject.subject}
                    </a>
                </div>
            </div>
        )
    } else {
        return <div></div> 
    }
}

export default Message
