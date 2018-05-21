import { action, observable } from "mobx";
import fits from "../lib/fits";
import GPUKernel from "../lib/gpuKernel";
import scaleFunctions from "../lib/scaleFunctions";

class Image {
  public id = null;
  public imageData = null;
  public metaData = null;
  public header = null;
  public renderer = null;
  @observable public canvas = null;
  @observable public min = 0;
  @observable public max = 500;
  @observable public scaleMode = 0;

  constructor(params) {
    this.id = params.id;
    this.imageData = params.imageData;
    this.metaData = params.metaData;
    this.header = params.header;
    this.renderer = GPUKernel(this.metaData.width, this.metaData.height);
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
    this.canvas = this.renderer.getCanvas();
  }

  @action
  public updateScaleMode(scaleMode) {
    this.scaleMode = scaleFunctions.indexOf(scaleMode);
    this.render();
  }
}

export default Image;
