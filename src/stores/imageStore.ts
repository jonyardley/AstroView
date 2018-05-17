import { action, flow, observable } from "mobx";
import loadImage from "../lib/loadImage";
import Image from "./image";

class ImageStore {
  @observable public images = [];

  public addImage = flow(function*(file) {
    try {
      const imageData = yield loadImage(file);
      const newImage = new Image({ ...imageData, id: this.imageIdCounter });
      this.images.push(newImage);
      this.imageIdCounter++;
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.error(e);
    }
  });

  @observable private imageIdCounter = 0;
}

export default new ImageStore();
