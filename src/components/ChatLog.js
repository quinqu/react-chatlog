import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {


 const chats = props.chatMessages.map((entry) => {

  return (
    <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}/> 
  )
  });

 return (
   <div className='chat-log'> {chats}</div>
 );

}


export default ChatLog;