const webpack = require("webpack");
const prodConfig = require("./webpack.config");
const merge = require("object-assign");

module.exports = merge(prodConfig, {
  entry: [
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server"
  ].concat(prodConfig.entry),
  output: merge( { publicPath: "http://localhost:3001/" }, prodConfig.output),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
        "browser":  JSON.stringify("true")
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ["react-hot", "babel-loader?optional[]=runtime"], exclude: /node_modules/ },
      { test: /\.scss$/, loader: "style!css!sass", exclude: /node_modules/ },
      { test: /\.svg$/, loader: "svg-inline" },
      { test: /\.(png|jpg|jpeg|gif|woff|eot|ttf)$/, loader: "file-loader" }
    ]
  },
  devtool: "#inline-source-map"
});
