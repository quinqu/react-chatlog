import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const data = chatMessages;
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        <ChatLog chatMessages={data} />
      </main>
    </div>
  );
};

export default App;
