const socket = new WebSocket('ws://localhost:8181');
socket.onopen = function (event) {
    console.log("Eia Web Socket connected")
};

socket.onmessage = function (event) {
    console.log('Message from server:', event.data);
    messageReceived(event.data)
};

socket.onerror = function (event) {
    console.error('WebSocket error:', event);
};

socket.onclose = function (event) {
    console.log('WebSocket is closed:', event);
};

export function sendCode(code: string) {
    socket.send(code);
}
