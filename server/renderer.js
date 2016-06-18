import React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/app/app";

export default class Renderer {
  static render(options = {}) {
    const scriptPath = options.hotLoading ? "http://localhost:3001/app.js" : "/app.js";
    const stylesPath = options.hotLoading ? null : "/style.css";

    return renderToString(
      <html>
        <head>
          <title>AstroView</title>
          {stylesPath && <link rel="stylesheet" href={stylesPath} />}
        </head>
        <body>
          <div className="app"><App/></div>
          <script src="js/fits.js" />
          <script src="js/fabric.js" />
          <script src={scriptPath} />
        </body>
      </html>
    );
  }
}
