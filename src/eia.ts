let socket: WebSocket | null = null

export function startWebSocket() {
    socket = new WebSocket('ws://ekita.hackclub.app');
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
}

export function sendCode(code: string) {
    socket.send(code);
}
