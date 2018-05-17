import { inject, observer } from "mobx-react";
import * as React from "react";
import GPUKernel from "../../lib/gpuKernel";

@observer
class Viewer extends React.Component<{ image }> {
  private canvas = null;

  public componentDidMount() {
    this.renderCanvas();
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
    return (
      <div>
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
