import { configure } from "mobx";
import { Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

import appStore from "./stores/appStore";
import imageStore from "./stores/imageStore";

configure({ enforceActions: true });

const stores = {
  imageStore,
  appStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
