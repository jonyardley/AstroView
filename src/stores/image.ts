import { action, observable } from "mobx";
import GPUKernel from "../lib/gpuKernel";
import scaleFunctions from "../lib/scaleFunctions";

export interface IStats {
  min: number;
  max: number;
  sum: number;
  sum2: number;
  range: number;
  stdDev: number;
  histo: number[];
  histomax: number;
}

class Image {
  public id: number;
  public imageData: any;
  public metaData: any;
  public header: any;
  public stats: IStats = {
    min: 0,
    max: 0,
    sum: 0,
    sum2: 0,
    range: 0,
    stdDev: 0,
    histo: new Array(600).fill(0),
    histomax: 0
  };

  @observable public renderer: any;
  @observable public min: number = 0;
  @observable public max: number = 500;
  @observable public scaleMode: number = 0;

  constructor(id: number, imageData: any, metaData: any, header: any) {
    this.id = id;
    this.imageData = imageData;
    this.metaData = metaData;
    this.header = header;

    this.calulateStats();
  }

  @action
  public initRenderer(canvas: HTMLCanvasElement): void {
    canvas.getContext("webgl2", { preserveDrawingBuffer: true });
    this.renderer = GPUKernel(
      this.metaData.width,
      this.metaData.height,
      canvas
    );
    this.render();
  }

  @action
  public render(): void {
    this.renderer(
      this.imageData,
      this.metaData.width,
      this.min,
      this.max,
      this.scaleMode
    );
  }

  @action
  public updateScaleMode(scaleMode: string): void {
    this.scaleMode = scaleFunctions.indexOf(scaleMode);
    this.render();
  }

  private calulateStats(): void {
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
        (this.stats.histo.length - 1) *
          (intensity - this.stats.min) /
          this.stats.range
      );
      if (++this.stats.histo[bin] > this.stats.histomax) {
        this.stats.histomax = this.stats.histo[bin];
      }
    }
  }
}

export default Image;
