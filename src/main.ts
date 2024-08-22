import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

function stdInput(): string {
  return "meow"
}

(window as any).stdInput = stdInput;


export default app;
