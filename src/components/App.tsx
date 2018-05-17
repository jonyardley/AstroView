import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ImageLoader from "./ImageLoader";
import Images from "./Images";
import Viewer from "./Viewer";

@inject("appStore", "imageStore")
@observer
class App extends React.Component<{ appStore?; imageStore? }> {
  public render() {
    return (
      <div>
        <h1>{this.props.appStore.name}</h1>
        {this.props.imageStore.selectedImage === null && <ImageLoader />}
        {this.props.imageStore.images.length > 0 && (
          <Viewer image={this.props.imageStore.selectedImage} />
        )}
      </div>
    );
  }
}

export default App;
