const Message = require('../models/Message');
const messages = [];

function fetchAndMarkUnreadMessagesAsRead(from, to) {
    let unreadMessages = [];
    messages.forEach(message => {
        // Check if the message is unread and matches the specified combination
        if (!message.read && ((message.from === from && message.to === to) || (message.from === to && message.to === from))) {
            // Mark the message as read
            message.read = true;
            // Push the unread message into the array
            unreadMessages.push(message);
            // Log the message ID (optional)
            console.log(`Message ${message.messageId} marked as read.`);
        }
    });

    return unreadMessages;
}


exports.sendMessage = (from, to, text) => {
    messages.push(new Message(from, to, text));
    return { status: 'success' };
};

exports.getChatHistory = (username, friend) => {
    const chatHistory = fetchAndMarkUnreadMessagesAsRead(username, friend);
    return { status: 'success', chatHistory };
};
