import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((msg) => (
                <div className="message-item" key={msg.id}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
