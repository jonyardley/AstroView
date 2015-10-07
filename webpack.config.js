const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [ "./client.js" ],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "public")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
        "browser":  JSON.stringify("true")
      }
    }),
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader?optional[]=runtime", exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass") },
      { test: /\.svg$/, loader: "svg-inline" },
      { test: /\.(png|jpg|jpeg|gif|woff|eot|ttf)$/, loader: "file-loader" }
    ]
  },
  worker: {
		output: {
			filename: "hash.worker.js",
			chunkFilename: "[id].hash.worker.js"
		}
	},
  externals: {
      "astro": "astro",
      "fabric": "fabric"
  }
};
