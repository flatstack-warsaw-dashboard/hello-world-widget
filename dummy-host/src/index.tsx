async function init() {
  const { default: renderHelloWorldWidget } = await import(
    'widgets/HelloWorldWidget'
  );

  renderHelloWorldWidget(document.getElementById('root'));
}

init();
