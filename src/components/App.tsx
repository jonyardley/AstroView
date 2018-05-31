import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppStore } from "../stores/appStore";
import { ImageStore } from "../stores/imageStore";
import ImageLoader from "./ImageLoader";
import Images from "./Images";
import Viewer from "./Viewer";

@inject("appStore", "imageStore")
@observer
class App extends React.Component<{
  appStore?: AppStore;
  imageStore?: ImageStore;
}> {
  public render() {
    return (
      <div>
        <h1>{this.props.appStore!.name}</h1>
        {this.props.imageStore!.selectedImage === null && (
          <ImageLoader imageStore={this.props.imageStore!} />
        )}
        {this.props.imageStore!.selectedImage && (
          <Viewer image={this.props.imageStore!.selectedImage!} />
        )}
      </div>
    );
  }
}

export default App;
