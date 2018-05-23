import { inject, observer } from "mobx-react";
import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import GPUKernel from "../../lib/gpuKernel";
import scaleFunctions from "../../lib/scaleFunctions";

@observer
class Viewer extends React.Component<{ image }> {
  private canvas = null;
  private histogram = null;
  private frequency = [];

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
        <BarChart
          width={730}
          height={250}
          data={this.props.image.stats.histogram.map(i => ({ i }))}
        >
          <XAxis />
          <YAxis scale="sqrt" />
          <Bar dataKey="i" fill="#000" />
        </BarChart>
      </div>
    );
  }
}

export default Viewer;
