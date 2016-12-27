if (process.env.NODE_ENV === 'development') {
  require('react-hot-loader/patch');
}

import React from 'react';
import { render } from 'react-dom';
import App from './App';

function bootstrap (App) {
  render(<App/>, document.getElementById('app'));
}

bootstrap(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    bootstrap(require('./App').default);
  });
}
