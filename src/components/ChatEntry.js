import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';


const ChatEntry = (props) => {
  const body= props.body;
  const sender = props.sender;
  const time = <Timestamp time={props.timeStamp} />;

  
  if (sender === "Estragon"){
    return(
      <div className="chat-entry remote">
        <h3 className="entry-name">{sender}</h3>
        <p className="entry-bubble"> {body}</p>
        <p className="entry-time"> {time}</p>
        
      </div>
      );
    
  }else{
    return (
      <div className="chat-entry local">
        <h3 className="entry-name">{sender} </h3>
        <p className="entry-bubble">{body}</p>
        <p className="entry-time">{time}</p>
      </div>
      );
  }

 
}

export default ChatEntry;