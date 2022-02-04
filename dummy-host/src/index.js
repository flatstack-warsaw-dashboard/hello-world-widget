import { loadHelloWorldWidget } from './devHelpers.js';

async function init() {
  await loadHelloWorldWidget();

  document.getElementById('root').innerHTML =
    '<fwd-hello-world-widget name="Kek"></fwd-hello-world-widget>';
}

init();
