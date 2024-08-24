import './app.css';
import App from './App.svelte';
import {sendCode, startWebSocket} from "./eia";

function loadFile() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  if (!params.has('fileUrl')) return;
  const fileUrl = params.get('fileUrl');

  if (fileUrl) {
    fetch(fileUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          console.log(data);
          // now we have to provide it to Eia to run it
          sendCode(JSON.stringify({"type": "file", "data": data}))
        })
        .catch(error => {
          console.error('Error fetching the file:', error);
        });
  } else {
    console.error('fileUrl parameter is missing');
  }
}

startWebSocket(loadFile)

const app = new App({
  target: document.getElementById('app'),
});

export default app;