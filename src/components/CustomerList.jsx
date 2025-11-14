import React from "react";
import "./CustomerList.css";

const CustomerList = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      <div className="customer-list-header">
        <h2>Messages</h2>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="customer-list-body">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`customer-item ${
              selectedCustomerId === customer.id ? "active" : ""
            }`}
            onClick={() => onSelectCustomer(customer.id)}
          >
            <div className="customer-avatar-wrapper">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="customer-avatar"
              />
              {customer.online && <span className="online-indicator"></span>}
            </div>
            <div className="customer-info">
              <div className="customer-header">
                <h3 className="customer-name">{customer.name}</h3>
                <span className="last-message-time">{customer.lastMessageTime}</span>
              </div>
              <div className="customer-last-message">
                <p className="last-message-text">{customer.lastMessage}</p>
                {customer.unread > 0 && (
                  <span className="unread-badge">{customer.unread}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;

