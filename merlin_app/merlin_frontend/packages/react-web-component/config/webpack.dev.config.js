const path = require("path");
const paths = require("./paths");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: paths.appPublic,
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
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
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: [paths.globalStyles]
            }
          }
        ]
      }
    ]
  },
  mode: "development",
  plugins: [],
  resolve: {
    modules: ["node_modules"].concat(
      process.env.NODE_PATH.split(path.delimiter)
    )
  }
};
