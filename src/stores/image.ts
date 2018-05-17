import { action, observable } from "mobx";
import fits from "../lib/fits";
import GPUKernel from "../lib/gpuKernel";

class Image {
  public id = null;
  public imageData = null;
  public metaData = null;
  public header = null;
  public renderer = null;
  public canvas = null;

  constructor(params) {
    this.id = params.id;
    this.imageData = params.imageData;
    this.metaData = params.metaData;
    this.header = params.header;
    this.renderer = GPUKernel(this.metaData.width, this.metaData.height);
    this.render(this.imageData, this.metaData.width, 0, 500, 0);
  }

  @action
  public render(data, width, min, max, scaleMode) {
    this.renderer(data, width, min, max, scaleMode);
    this.canvas = this.renderer.getCanvas();
  }
}

export default Image;
