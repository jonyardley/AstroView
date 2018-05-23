import { inject, observer } from "mobx-react";
import * as React from "react";
import ReactCursorPosition from "react-cursor-position";
import GPUKernel from "../../lib/gpuKernel";
import scaleFunctions from "../../lib/scaleFunctions";
import Histogram from "./histogram";

@observer
class Viewer extends React.Component<{ image }> {
  private canvas = null;
  private zoom = null;
  private cursor = null;

  public componentDidMount() {
    this.props.image.initRenderer(this.canvas);
    this.updateZoomCanvas({ x: 0, y: 0 });
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
            this.updateZoomCanvas(position);
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
        <canvas
          width="200"
          height="150"
          ref={el => {
            this.zoom = el;
          }}
        />
      </div>
    );
  }

  private updateZoomCanvas({ x, y }) {
    const ctx = this.zoom.getContext("2d");
    const offset = this.canvas.width / 800;
    ctx.drawImage(
      this.canvas,
      x * offset - 100 / 2,
      y * offset - 75 / 2,
      200,
      150,
      0,
      0,
      400,
      300
    );

    ctx.strokeStyle = "#E11010";
    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(100, 55);
    ctx.lineTo(100, 65);

    ctx.moveTo(100, 85);
    ctx.lineTo(100, 95);

    ctx.moveTo(90, 75);
    ctx.lineTo(80, 75);

    ctx.moveTo(110, 75);
    ctx.lineTo(120, 75);

    ctx.stroke();
  }
}

export default Viewer;
