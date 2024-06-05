import React, { useState } from 'react';
import '../../styles/views/ChatBotView.scss';
import { BeatLoader } from 'react-spinners';

const ChatBotComponent = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'I am a helpful assistant.' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userMessage.trim()) {
      const newMessages = [...messages, { from: 'user', text: userMessage }];
      setMessages(newMessages);
      setUserMessage('');
      setLoading(true);
      setError('');

      try {
        const response = await fetch('http://51.20.250.190:5000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: userMessage }),
        });

        const data = await response.json();
        if (response.ok) {
          setMessages([...newMessages, { from: 'bot', text: data.response }]);
        } else {
          setError(data.error || 'Failed to get response from the bot.');
        }
      } catch (err) {
        setError('Failed to get response from the bot.');
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      {isMinimized ? (
        <div className="chatbot-minimized" onClick={toggleMinimize}>
          Click here to chat with the bot
        </div>
      ) : (
        <div>
          <div className="chatbot-header">
            <h1>ChatBot</h1>
            <button className="minimize-button" onClick={toggleMinimize}>X</button>
          </div>
          <div className="chat-header">What do you want to know about Roger?</div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.from === 'bot' ? 'bot' : 'user'}`}
              >
                {message.text}
              </div>
            ))}
            {loading && <div className="chat-message bot"><BeatLoader color="#36d7b7" /></div>}
            {error && <div className="chat-message bot error">{error}</div>}
          </div>
          <form onSubmit={handleSubmit} className="chat-input-container">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button
              type="submit"
              className="chat-submit-button"
              disabled={!userMessage.trim() || loading}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;

