import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AppState from "../state/index";

class App extends React.Component<{ appState: AppState }, {}> {
  public render() {
    return (
      <div>
        <h1>{this.props.appState.app.name}</h1>
        <DevTools />
      </div>
    );
  }
}

export default App;
