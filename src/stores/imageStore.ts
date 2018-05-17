import { action, flow, observable } from "mobx";
import loadImage from "../lib/loadImage";
import Image from "./image";

class ImageStore {
  @observable public images = [];
  @observable public selectedImage = null;

  public addImage = flow(function*(file) {
    const imageData = yield loadImage(file);
    const newImage = new Image({ ...imageData, id: this.imageIdCounter });
    this.images.push(newImage);
    this.selectedImage = newImage;
    this.imageIdCounter++;
  });

  @observable private imageIdCounter = 0;
}

export default new ImageStore();
