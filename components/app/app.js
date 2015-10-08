import React, {Component} from "react";
import {root} from "baobab-react/higher-order";
import {tree} from "../../state";
import "./app.scss";
import Sidebar from "../sidebar/sidebar";

class App extends Component {

  render() {
    return (
      <div className="main">
        <Sidebar />
      </div>
    );
  }
}

// https://github.com/Yomguithereal/baobab-react/blob/master/docs/higher-order.md
const RootedApp = root(App, tree);

export default RootedApp;
