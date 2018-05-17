import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ImageLoader from "./ImageLoader";

@inject("appStore")
@observer
class App extends React.Component<{ appStore? }> {
  public render() {
    return (
      <div>
        <h1>{this.props.appStore.name}</h1>
        <ImageLoader />
        <DevTools />
      </div>
    );
  }
}

export default App;
