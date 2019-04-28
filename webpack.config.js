const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public", "javascripts")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
