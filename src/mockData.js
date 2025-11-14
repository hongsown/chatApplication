export const mockCustomers = [
  {
    id: 1,
    name: "John Smith",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Hi, I need help with the product",
    lastMessageTime: "10:30",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Thanks for your help!",
    lastMessageTime: "09:15",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "When will new items arrive?",
    lastMessageTime: "Yesterday",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "OK, I'll wait",
    lastMessageTime: "Yesterday",
    unread: 0,
    online: false
  },
  {
    id: 5,
    name: "Robert Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "How much does it cost?",
    lastMessageTime: "2 days ago",
    unread: 0,
    online: true
  }
];

export const mockConversations = {
  1: [
    {
      id: 1,
      senderId: 1,
      senderName: "John Smith",
      message: "Hi, I'd like to ask about Product A",
      timestamp: "10:25",
      isOwn: false
    },
    {
      id: 2,
      senderId: "me",
      senderName: "You",
      message: "Hello! How can I help you?",
      timestamp: "10:26",
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: "John Smith",
      message: "Is this product still in stock?",
      timestamp: "10:28",
      isOwn: false
    },
    {
      id: 4,
      senderId: "me",
      senderName: "You",
      message: "Yes, we have it in stock. How many do you need?",
      timestamp: "10:29",
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      senderName: "John Smith",
      message: "I need 5 units. What's the price?",
      timestamp: "10:30",
      isOwn: false
    }
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      senderName: "Sarah Johnson",
      message: "Has my order arrived yet?",
      timestamp: "09:10",
      isOwn: false
    },
    {
      id: 2,
      senderId: "me",
      senderName: "You",
      message: "Let me check that for you",
      timestamp: "09:11",
      isOwn: true
    },
    {
      id: 3,
      senderId: "me",
      senderName: "You",
      message: "Your order has been delivered successfully",
      timestamp: "09:13",
      isOwn: true
    },
    {
      id: 4,
      senderId: 2,
      senderName: "Sarah Johnson",
      message: "Thanks for your help!",
      timestamp: "09:15",
      isOwn: false
    }
  ],
  3: [
    {
      id: 1,
      senderId: 3,
      senderName: "Michael Chen",
      message: "When will new items arrive?",
      timestamp: "Yesterday",
      isOwn: false
    }
  ],
  4: [
    {
      id: 1,
      senderId: 4,
      senderName: "Emily Davis",
      message: "I'd like to return a product",
      timestamp: "Yesterday",
      isOwn: false
    },
    {
      id: 2,
      senderId: "me",
      senderName: "You",
      message: "Please provide your order number",
      timestamp: "Yesterday",
      isOwn: true
    },
    {
      id: 3,
      senderId: 4,
      senderName: "Emily Davis",
      message: "OK, I'll wait",
      timestamp: "Yesterday",
      isOwn: false
    }
  ],
  5: [
    {
      id: 1,
      senderId: 5,
      senderName: "Robert Wilson",
      message: "How much does it cost?",
      timestamp: "2 days ago",
      isOwn: false
    }
  ]
};

