import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import AppState from "./state/index";

const appState = new AppState();
ReactDOM.render(<App appState={appState} />, document.getElementById("root"));
