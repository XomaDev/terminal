import './app.css';
import App from './App.svelte';
import {startWebSocket} from "./eia";

startWebSocket()

const app = new App({
  target: document.getElementById('app'),
});

export default app;

