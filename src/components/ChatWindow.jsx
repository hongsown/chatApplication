import React, { useState, useRef, useEffect } from "react";
import "./ChatWindow.css";

const ChatWindow = ({ customer, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  if (!customer) {
    return (
      <div className="chat-window">
        <div className="no-chat-selected">
          <div className="no-chat-icon">💬</div>
          <h3>Select a conversation</h3>
          <p>Choose a customer from the left sidebar to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-header-info">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="chat-header-avatar"
          />
          <div className="chat-header-text">
            <h3>{customer.name}</h3>
            <p className="status">
              {customer.online ? (
                <>
                  <span className="status-dot online"></span>
                  Active now
                </>
              ) : (
                <>
                  <span className="status-dot"></span>
                  Offline
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-wrapper ${msg.isOwn ? "own" : "other"}`}
          >
            {!msg.isOwn && (
              <img
                src={customer.avatar}
                alt={msg.senderName}
                className="message-avatar"
              />
            )}
            <div className={`message-bubble ${msg.isOwn ? "own" : "other"}`}>
              <p className="message-text">{msg.message}</p>
              <span className="message-time">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="send-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;

