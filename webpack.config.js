const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  devtool: production ? null : "inline-sourcemap",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [new CopyWebpackPlugin(["index.html", "public"], {})]
};
