import { inject, observer } from "mobx-react";
import * as React from "react";
import ReactCursorPosition from "react-cursor-position";
import GPUKernel from "../../lib/gpuKernel";
import scaleFunctions from "../../lib/scaleFunctions";
import Histogram from "./histogram";
import Zoom from "./zoom";

@observer
class Viewer extends React.Component<{ image }, { x; y; canvas }> {
  private canvas = null;
  private zoom = null;
  private cursor = null;

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      canvas: null
    };
  }

  public componentDidMount() {
    this.props.image.initRenderer(this.canvas);
    this.setState({ canvas: this.canvas });
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
        <ReactCursorPosition
          onPositionChanged={({ position }) => {
            this.setState({ ...position });
          }}
          style={{ display: "inline-block" }}
        >
          <canvas
            style={{ width: 800, height: 800, background: "#000" }}
            ref={el => {
              this.canvas = el;
            }}
          />
        </ReactCursorPosition>
        <Histogram stats={this.props.image.stats} />
        <Zoom
          width={200}
          height={150}
          x={this.state.x}
          y={this.state.y}
          canvasWidth={800}
          canvas={this.state.canvas}
        />
      </div>
    );
  }
}

export default Viewer;
