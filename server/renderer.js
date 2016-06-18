import React from 'react';
import App from '../components/app/app';
import mainStore from '../store';
import { Provider } from 'react-redux';

export default function Renderer(props, { locals }) {
  const scriptPath = locals.options.hotLoading ? "http://localhost:3001/app.js" : "/app.js";
  const stylesPath = locals.options.hotLoading ? null : "/style.css";
  const store = mainStore({});

  return (
    <html>
      <head>
        <title>AstroView</title>
        {stylesPath && <link rel="stylesheet" href={stylesPath} />}
      </head>
      <body>
        <div id="app">
        <Provider store={store}>
          <App/>
        </Provider>
        </div>
        <script src="js/fits.js" />
        <script src="js/fabric.js" />
        <script src={scriptPath} />
      </body>
    </html>
  );
}
