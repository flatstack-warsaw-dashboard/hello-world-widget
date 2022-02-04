async function init() {
  await import('hello-world-widget');

  document.getElementById('root')!.innerHTML =
    '<fwd-hello-world-widget name="Kek"></fwd-hello-world-widget>';
}

init();
