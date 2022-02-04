const widgetsHosts = {
  helloWorldWidget: 'http://localhost:3301',
};

export async function loadHelloWorldWidget() {
  // you should NOT fetch manifest.json in real-world production application from browser.
  // It should be done on server side.
  const scriptUrl = `${widgetsHosts.helloWorldWidget}/${
    (
      await (
        await fetch(`${widgetsHosts.helloWorldWidget}/manifest.json`)
      ).json()
    ).main
  }`;

  await injectScript(scriptUrl);
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
