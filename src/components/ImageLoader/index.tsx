import { inject } from "mobx-react";
import * as React from "react";
import Image from "../../stores/image";
import { ImageStore } from "../../stores/imageStore";

interface IProps {
  imageStore: ImageStore;
}

const loadFile = (
  e: React.SyntheticEvent<HTMLInputElement>,
  imageStore: ImageStore
): void => {
  const { files } = e.currentTarget;
  if (files && files.length > 0 && files[0]) {
    imageStore.addImage(files[0]);
    e.currentTarget.value = "";
  } else {
    /* tslint:disable-next-line */
    console.error("Could not load file");
  }
};

const ImageLoader = (props: IProps) => (
  <input
    type="file"
    accept=".fits,.fit,.FIT,.FITS"
    onChange={e => loadFile(e, props.imageStore)}
  />
);

export default inject("imageStore")(ImageLoader);
