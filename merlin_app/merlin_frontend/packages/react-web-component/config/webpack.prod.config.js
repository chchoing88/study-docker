const path = require("path");
const paths = require("./paths");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                outputStyle: "compact",
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  mode: "production",
  plugins: [new ExtractTextPlugin("css/[name].css")],
  resolve: {
    modules: ["node_modules"]
  }
};
