import { inject } from "mobx-react";
import * as React from "react";

const ImageLoader = props => (
  <input
    type="file"
    accept=".fits,.fit,.FIT,.FITS"
    onChange={e => {
      props.imageStore.addImage(e.target.files[0]);
      e.target.value = "";
    }}
  />
);

export default inject("imageStore")(ImageLoader);
