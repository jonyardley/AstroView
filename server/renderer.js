import React from "react/addons";
import App from "../components/app/app";

export default class Renderer {
  static render(options = {}) {
    const scriptPath = options.hotLoading ? "http://localhost:3001/app.js" : "/app.js";
    const stylesPath = options.hotLoading ? null : "/style.css";

    return React.renderToStaticMarkup(
      <html>
        <head>
          <title>AstroView</title>
          {stylesPath && <link rel="stylesheet" href={stylesPath} />}
        </head>
        <body>
          <div className="app"><App/></div>
          <script src={scriptPath} />
        </body>
      </html>
    );
  }
}
