import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import ChatWindow from "./components/ChatWindow";
import { mockCustomers, mockConversations } from "./mockData";
import "./App.css";

const App = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [conversations, setConversations] = useState(mockConversations);

  const selectedCustomer = mockCustomers.find(
    (c) => c.id === selectedCustomerId
  );
  const messages = conversations[selectedCustomerId] || [];

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: messages.length + 1,
      senderId: "me",
      senderName: "You",
      message: messageText,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
    };

    setConversations((prev) => ({
      ...prev,
      [selectedCustomerId]: [...(prev[selectedCustomerId] || []), newMessage],
    }));
  };

  return (
    <div className="app">
      <CustomerList
        customers={mockCustomers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      <ChatWindow
        customer={selectedCustomer}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;
