import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorldWidget from './HelloWorldWidget';

function render(target: Element) {
  ReactDOM.render(<HelloWorldWidget />, target);
}

export default render;
