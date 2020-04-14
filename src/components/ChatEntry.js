import React from 'react';
import Timestamp from './Timestamp';


const ChatEntry = (props) => {
  const body= props.body;
  const sender = props.sender;
  const time = <Timestamp time={props.timeStamp} />;

  let chatEntry = <h1>hello</h1>;
  if(sender === "Estragon"){
    chatEntry = (
      <div className="chat-entry local">
        <h3 className="entry-name">{sender}</h3>
        <p className="entry-bubble"> {body}</p>
        <h6 className="entry-time"> {time}</h6>
      </div>
      );
    
  }else{
    chatEntry = (
      <div className="chat-entry remote">
        <h3 className="entry-name">{sender} </h3>
        <p className="entry-bubble"> {body}</p>
        <h6 className="entry-time"> {time}</h6>
      </div>
      );
  }

  return chatEntry;
}

export default ChatEntry;