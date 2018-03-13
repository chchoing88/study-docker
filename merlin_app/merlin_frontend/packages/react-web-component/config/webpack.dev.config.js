const path = require("path");
const paths = require("./paths");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: paths.appPublic,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development",
  plugins: [],
  resolve: {
    modules: ["node_modules"]
  }
};
