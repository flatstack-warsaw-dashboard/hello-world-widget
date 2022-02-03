async function init() {
  await import('widgets/HelloWorldWidget');

  document.getElementById('root')!.innerHTML =
    '<fwd-hello-world-widget name="Kek"></fwd-hello-world-widget>';
}

init();
