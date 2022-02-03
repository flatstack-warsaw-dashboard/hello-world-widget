import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorldWidgetComponent from './HelloWorldWidget';

class HelloWorldWidget extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');

    ReactDOM.render(<HelloWorldWidgetComponent name={name} />, this);
  }
}

window.customElements.define('fwd-hello-world-widget', HelloWorldWidget);
