import React from 'react';
import Button from "./Button";

const Chat = () => {
    return (
        <div>
            <div className="chat-window"></div>
            <div className="chat-control">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Type your message here</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Button buttonText = "Send"/>
            </div>
        </div>
    )
}

export default Chat;