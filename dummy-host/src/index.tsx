import * as React from 'react';
import { render } from 'react-dom';

const HelloWorldWidget = React.lazy(() => import('widgets/HelloWorldWidget'));

render(
  <React.Suspense fallback="Loading">
    <HelloWorldWidget />
  </React.Suspense>,
  document.getElementById('root'),
);
