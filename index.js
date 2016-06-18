process.env.NODE_ENV = process.env.NODE_ENV || "development";

require("babel/register");
require("./server/style-shim");
require("./server").listen({ port: process.env.PORT || 3000 }, () => {
    console.log('AstroView server started');
  });
