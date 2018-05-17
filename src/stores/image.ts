import { observable } from "mobx";
import fits from "../lib/fits";

class Image {
  public id = null;
  public imageData = null;
  public metaData = null;
  public header = null;

  constructor(params) {
    this.id = params.id;
    this.imageData = params.imageData;
    this.metaData = params.metaData;
    this.header = params.header;
  }
}

export default Image;
