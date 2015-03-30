import React from 'react';
import App from './components/app/app.jsx'

React.render(
  <App/>,
  document.getElementById('main'),
  function(){
    if(window.location.hostname){
      require('./utils/dev');
    };
  }
)