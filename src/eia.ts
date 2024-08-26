export let EIA_ENDPOINT = "ekita.hackclub.app";

let socket: WebSocket | null = null

export function startWebSocket(onConnectedCallback: Function) {
    socket = new WebSocket('wss://' + EIA_ENDPOINT);
    socket.onopen = function (event) {
        console.log("Eia Web Socket connected")
        eiaConnected();
        onConnectedCallback(event);
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
        eiaDisconnected();
    };
}

export function sendCode(code: string) {
    console.log("Sending: " + code);
    socket.send(code);
}
