export function fetchResponse() {
    return fetch('/messages')
    .then(response => response.json())
    .then(data => {
        return data[data.length - 1];  // Get the last message (server's response)
    })
    .catch(error => {
        console.error('Error fetching response:', error);
        return 'Error fetching response';
    });
}
