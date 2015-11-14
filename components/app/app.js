import React, {Component} from "react";
import {root} from "baobab-react/higher-order";
import {appState} from "../../state";
import "./app.scss";
import Main from "./main";


class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

// https://github.com/Yomguithereal/baobab-react/blob/master/docs/higher-order.md
const RootedApp = root(App, appState);

export default RootedApp;
