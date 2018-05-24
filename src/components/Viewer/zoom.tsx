import * as React from "react";

class Zoom extends React.Component<{
  x;
  y;
  width;
  height;
  canvas;
  canvasWidth;
}> {
  private zoom = null;

  public componentDidMount() {
    if (this.props.canvas) {
      this.updateZoomCanvas();
    }
  }

  public shouldComponentUpdate() {
    if (this.props.canvas) {
      this.updateZoomCanvas();
    }
    return false;
  }

  public render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={el => {
          this.zoom = el;
        }}
      />
    );
  }

  private updateZoomCanvas() {
    const { x, y, canvas, width, height, canvasWidth } = this.props;
    const ctx = this.zoom.getContext("2d");
    const offset = canvas.width / canvasWidth;
    ctx.drawImage(
      canvas,
      (x || 0) * offset - width / 4,
      (y || 0) * offset - height / 4,
      width,
      height,
      0,
      0,
      width * 2,
      height * 2
    );

    ctx.strokeStyle = "#E11010";
    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(width / 2, height / 2 - 10);
    ctx.lineTo(width / 2, height / 2 - 20);

    ctx.moveTo(width / 2, height / 2 + 10);
    ctx.lineTo(width / 2, height / 2 + 20);

    ctx.moveTo(width / 2 + 10, height / 2);
    ctx.lineTo(width / 2 + 20, height / 2);

    ctx.moveTo(width / 2 - 10, height / 2);
    ctx.lineTo(width / 2 - 20, height / 2);

    ctx.stroke();
  }
}

export default Zoom;
