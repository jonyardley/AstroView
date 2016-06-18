import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import mainStore from './store';

const store = mainStore({});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
