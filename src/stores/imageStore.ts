import { action, flow, observable } from "mobx";
import loadImage from "../lib/loadImage";
import Image from "./image";

export class ImageStore {
  @observable public images: Image[] = [];
  @observable public selectedImage: Image | null = null;

  public addImage = flow(function*(this: ImageStore, file: File) {
    const result = yield loadImage(file);
    const newImage = new Image(
      this.imageIdCounter,
      result.imageData,
      result.metaData,
      result.header
    );
    this.images.push(newImage);
    this.selectedImage = newImage;
    this.imageIdCounter++;
  });

  @observable private imageIdCounter: number = 0;
}

export default new ImageStore();
