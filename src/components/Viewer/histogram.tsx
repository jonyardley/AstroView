import { observer } from "mobx-react";
import * as React from "react";

@observer
class Histogram extends React.Component<{ stats }> {
  private canvas = null;
  public componentDidMount() {
    const ctx = this.canvas.getContext("2d");
    const graphw = this.canvas.width;
    const graphh = this.canvas.height;
    const { histo, histomax } = this.props.stats;
    const lhmax = Math.log(histomax);

    // Canvas Setup
    ctx.imageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.oImageSmoothingEnabled = false;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0.5, 0.5);

    // Set Background colour
    ctx.fillStyle = "#CCC";
    ctx.fillRect(0, 0, graphw, graphh);

    // set bar Colour
    ctx.fillStyle = "#000000";
    ctx.beginPath();

    if (graphw > histo.length) {
      ctx.moveTo(0, graphh - 1);
      for (let hx = 0; hx < histo.length; hx++) {
        const x = Math.floor(graphw * hx / histo.length);
        const y =
          histo[hx] > 1
            ? Math.floor(graphh * (1.0 - Math.log(histo[hx]) / lhmax))
            : graphh - 1;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(graphw, graphh - 1);
      ctx.lineTo(0, graphh - 1);
      ctx.fill();
    } else {
      for (let x = 0; x < graphw; x++) {
        const hx = Math.floor(x * histo.length / graphw);
        const y =
          histo[hx] > 1
            ? Math.floor(graphh * (1.0 - Math.log(histo[hx]) / lhmax))
            : graphh - 1;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(graphw, graphh - 1);
      ctx.lineTo(0, graphh - 1);
      ctx.fill();
    }
  }
  public render() {
    return (
      <canvas
        width="400"
        height="150"
        ref={el => {
          this.canvas = el;
        }}
      />
    );
  }
}

export default Histogram;
