process.env.NODE_ENV = process.env.NODE_ENV || "development";

require("babel/register");
// require("./server/style-shim");
require("./server").listen(3000);
