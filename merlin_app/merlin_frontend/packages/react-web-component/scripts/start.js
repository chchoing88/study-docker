"use strict"

process.env.BABEL_ENV = "development"
process.env.NODE_ENV = "development"

const Webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const webpackConfig = require("../config/webpack.dev.config")
const open = require("open")

// setting
const host = process.env.HOST || "0.0.0.0"
const proxyUrl = "http://nodeapp.local:8081"
const publicPath = "/"
const port = process.env.PORT || 3001

const compiler = Webpack(webpackConfig)
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
	proxy: {
		"/": {
			target: proxyUrl,
			secure: false,
		}
	},
	host,
	port,
	publicPath,
	stats: {
		colors: true
	}
})

webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:3001/")
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(port, host, err => {
	if (err) {
		return console.log(err)
	}

	console.log("Starting server on http://nodeapp.local:3001")
	open("http://nodeapp.local:3001")
})