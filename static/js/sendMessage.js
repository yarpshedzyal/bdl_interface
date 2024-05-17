export function sendMessage() {
    console.log('sendMessage called');
    var message = document.getElementById('message').value;
    if (message.trim() === '') {
        console.log('Message is empty');
        return Promise.reject('Message is empty');
    }
    return fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'message=' + encodeURIComponent(message)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        document.getElementById('message').value = ''; // Clear the input field after sending
        return response.json();
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}