export function fetchMessages() {
    return fetch('/messages')
    .then(response => response.json())
    .then(data => {
        var messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML = '';
        data.forEach(msg => {
            var p = document.createElement('p');
            p.textContent = msg;
            messagesDiv.appendChild(p);
        });
        scrollToBottom(); // Scroll to bottom after displaying messages
    });
}

function scrollToBottom() {
    // Scroll the chat area to the bottom
    const messagesDiv = document.getElementById('messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}