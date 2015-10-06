import koa from "koa";
import serve from "koa-static";
import compress from "koa-compress";
import React from "react";
import Renderer from "./server/renderer";

const app = koa();
app.experimental = true;

let hotLoading;
if (process.env.NODE_ENV === "development") {
  hotLoading = true;
  require("./server/hot-loader").listen(3001);
}

app.use(compress({
  threshold: 2048,
  flush: require("zlib").Z_SYNC_FLUSH
}));

app.use(serve("public"));

app.use(function() {
  this.body = Renderer.render({hotLoading});
});

console.log("Server starting...");

export default app;
