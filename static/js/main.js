import { sendMessage } from './sendMessage.js';
import { fetchMessages } from './fetchMessages.js';

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('sendButton').addEventListener('click', () => {
        sendMessage()
        .then(() => {
            fetchMessages(); // Fetch messages
        });
    });

    document.getElementById('message').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of the Enter key (form submission)
            sendMessage()
            .then(() => {
                fetchMessages(); // Fetch messages
            });
        }
    });

    // Fetch messages on page load
    fetchMessages();
});

