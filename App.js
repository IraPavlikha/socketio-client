import React, { useState } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import './styles.css';

const App = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, { text: message, id: Date.now() }]);
    };

    return (
        <div className="chat-container">
            <h2 className="chat-title">Чат</h2>
            <MessageList messages={messages} />
            <MessageInput addMessage={addMessage} />
        </div>
    );
};

export default App;
