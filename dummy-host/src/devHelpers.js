const widgetsHosts = {
  helloWorldWidget: 'http://localhost:3301',
};

export async function setWidgetsRemotes() {
  window.WIDGETS_REMOTES = Object.fromEntries(
    await Promise.all(
      Object.entries(widgetsHosts).map(async ([widgetName, widgetHost]) => [
        widgetName,
        `${widgetHost}/${
          (
            await (await fetch(`${widgetHost}/manifest.json`)).json()
          ).main
        }`,
      ]),
    ),
  );
}

export function injectScript(url) {
  return new Promise((resolve) => {
    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;
    element.onload = () => {
      resolve();
    };
    document.head.appendChild(element);
  });
}

export async function loadFederatedModule(scope, module) {
  await __webpack_init_sharing__('default');
  const container = window[scope];
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
}
