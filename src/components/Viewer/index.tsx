import { inject, observer } from "mobx-react";
import * as React from "react";
import GPUKernel from "../../lib/gpuKernel";
import scaleFunctions from "../../lib/scaleFunctions";

@observer
class Viewer extends React.Component<{ image }> {
  private canvas = null;

  public componentDidMount() {
    this.props.image.initRenderer(this.canvas);
  }

  public render() {
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
        <br />
        <canvas
          style={{ width: 800, height: 800, background: "#000" }}
          ref={el => {
            this.canvas = el;
          }}
        />
      </div>
    );
  }
}

export default Viewer;
