import { action, observable } from "mobx";
import fits from "../lib/fits";
import GPUKernel from "../lib/gpuKernel";
import scaleFunctions from "../lib/scaleFunctions";

class Image {
  public id = null;
  public imageData = null;
  public metaData = null;
  public header = null;
  public stats = {
    min: 0,
    max: 0,
    sum: 0,
    sum2: 0,
    range: 0,
    stdDev: 0,
    histogram: new Array(128).fill(0),
    histogramMax: 0
  };
  @observable public renderer = null;
  @observable public min = 0;
  @observable public max = 500;
  @observable public scaleMode = 0;

  constructor(params) {
    this.id = params.id;
    this.imageData = params.imageData;
    this.metaData = params.metaData;
    this.header = params.header;

    for (const intensity of this.imageData) {
      if (intensity > this.stats.max) {
        this.stats.max = intensity;
      }
      if (intensity < this.stats.min) {
        this.stats.min = intensity;
      }
      this.stats.sum += intensity;
      this.stats.sum2 += intensity * intensity;
    }

    this.stats.range = Math.max(1, this.stats.max - this.stats.min);
    this.stats.stdDev =
      Math.sqrt(
        this.imageData.length * this.stats.sum2 -
          this.stats.sum * this.stats.sum
      ) / this.imageData.length;

    for (const intensity of this.imageData) {
      const bin = Math.floor(
        (this.stats.histogram.length - 1) *
          (intensity - this.stats.min) /
          this.stats.range
      );
      if (++this.stats.histogram[bin] > this.stats.histogramMax) {
        this.stats.histogramMax = this.stats.histogram[bin];
      }
    }
  }

  @action
  public initRenderer(canvas) {
    this.renderer = GPUKernel(
      this.metaData.width,
      this.metaData.height,
      canvas
    );
    this.render();
  }

  @action
  public render() {
    this.renderer(
      this.imageData,
      this.metaData.width,
      this.min,
      this.max,
      this.scaleMode
    );
  }

  @action
  public updateScaleMode(scaleMode) {
    this.scaleMode = scaleFunctions.indexOf(scaleMode);
    this.render();
  }
}

export default Image;
