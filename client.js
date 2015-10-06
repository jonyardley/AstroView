import React from "react";
React.initializeTouchEvents(true);

import promise from "es6-promise";
promise.polyfill();

import App from "./components/app/app";

// const props = document.body.getAttribute("data-props");
// const content = props ? JSON.parse(props) : null;
React.render(<App />, document.querySelector(".app"));
