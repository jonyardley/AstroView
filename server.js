import Rill from "rill";
import compress from "@rill/compress";
import serve from "@rill/static";

import React from "react";
import Renderer from "./server/renderer";

const app  = Rill();

let hotLoading;
if (process.env.NODE_ENV === "development") {
  hotLoading = true;
  require("./server/hot-loader").listen(3001);
}

app.use(compress({
  threshold: "2048kb"
}));

app.use(serve("public"));

app.use(({ req, res }, next) => {
  res.body = Renderer.render({ hotLoading });
});

export default app;
