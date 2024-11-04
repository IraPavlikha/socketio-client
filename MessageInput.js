import React, { useState } from 'react';

const MessageInput = ({ addMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <form className="message-input-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="message-input"
                placeholder="Введіть повідомлення"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-button">Відправити</button>
        </form>
    );
};

export default MessageInput;
