"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../config/webpack.dev.config");
const webpackDevConfig = require("../config/webpackDevServer");
const open = require("open");

// setting
const host = process.env.HOST || "0.0.0.0";
const proxyUrl = "http://nodeapp.local:8081";
const publicPath = "/";
const port = process.env.PORT || 3001;
const devServerOptions = Object.assign({}, webpackDevConfig, {
  proxy: {
    "/": {
      target: proxyUrl,
      secure: false
    }
  },
  host,
  port,
  publicPath,
  stats: {
    colors: true
  }
});
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:3001/");
webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
webpackConfig.plugins.push(new Webpack.NamedModulesPlugin());

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, err => {
  if (err) {
    return console.log(err);
  }

  console.log("Starting server on http://nodeapp.local:3001");
  open("http://nodeapp.local:3001");
});
