import { action, observable } from "mobx";
import fits from "../lib/fits";
import GPUKernel from "../lib/gpuKernel";
import scaleFunctions from "../lib/scaleFunctions";

class Image {
  public id = null;
  public imageData = null;
  public metaData = null;
  public header = null;
  @observable public renderer = null;
  @observable public min = 0;
  @observable public max = 500;
  @observable public scaleMode = 0;

  constructor(params) {
    this.id = params.id;
    this.imageData = params.imageData;
    this.metaData = params.metaData;
    this.header = params.header;
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
