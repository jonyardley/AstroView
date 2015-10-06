import React, {Component} from "react";
import {root} from "baobab-react/higher-order";
import tree from "./state";
import List from "../list/list";
import LoadImage from "../load-image/load-image";


class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <LoadImage/>
        <List />
      </div>);
  }
}

const RootedApp = root(App, tree);

export default RootedApp;
