import from 'babelify/polyfill';
import React from 'react';
import App from './components/app/app.jsx';
import dev from './utils/dev';

React.render(
  <App/>,
  document.getElementById('main'),
  function(){
    if(window.location.hostname === 'localhost'){
      dev()
    };
  }
)
