import { action, flow, observable } from "mobx";
import Image from "./image";

class ImageStore {
  @observable public images = [];

  public addImage = flow(function*(file) {
    const newImage = new Image(this.imageIdCounter, file);
    this.images.push(newImage);
    this.imageIdCounter++;
  });

  @observable private imageIdCounter = 0;
}

export default new ImageStore();
