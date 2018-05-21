import { inject, observer } from "mobx-react";
import * as React from "react";
import GPUKernel from "../../lib/gpuKernel";
import scaleFunctions from "../../lib/scaleFunctions";

@observer
class Viewer extends React.Component<{ image }> {
  private canvas = null;

  public componentDidMount() {
    this.renderCanvas();
  }

  public componentDidUpdate() {
    console.log("did update");
  }

  public componentWillReceiveProps() {
    console.log("will receive props");
  }

  public renderCanvas() {
    const ctx = this.canvas.getContext("2d");
    const { image } = this.props;
    ctx.drawImage(
      image.canvas,
      0,
      0,
      image.metaData.width,
      image.metaData.height,
      0,
      0,
      800,
      800
    );
  }

  public render() {
    console.log("render");
    return (
      <div>
        {scaleFunctions.map(name => (
          <button
            onClick={() => this.props.image.updateScaleMode(name)}
            key={`edit-scale-${name}`}
          >
            {name}
          </button>
        ))}
        <h1>{this.props.image.scaleMode}</h1>
        <canvas
          width={800}
          height={800}
          ref={el => {
            this.canvas = el;
          }}
        />
      </div>
    );
  }
}

export default Viewer;
