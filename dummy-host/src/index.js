import {
  injectScript,
  loadFederatedModule,
  setWidgetsRemotes,
} from './devHelpers.js';

async function init() {
  // It is workaround for dev env.
  // In real-world application `window.WIDGETS_REMOTES` should be injected into page by backend,
  // because `manifest.json` should NOT be requested from browser
  await setWidgetsRemotes();

  await injectScript(window.WIDGETS_REMOTES.helloWorldWidget);

  await loadFederatedModule('helloWorldWidget', '.');

  document.getElementById('root').innerHTML =
    '<fwd-hello-world-widget name="Kek"></fwd-hello-world-widget>';
}

init();
