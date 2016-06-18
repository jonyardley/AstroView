const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.dev.config");

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: 'none'
});

export default server;
