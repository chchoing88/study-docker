const noopServiceWorkerMiddleware = require("noop-service-worker-middleware");

module.exports = {
  public: "nodeapp.local:3001",
  inline: true, // live reloading insert bundle..
  hot: true, // hot module reloading
  compress: true, // enable gzip compression
  historyApiFallback: true,
  before(app) {
    app.use(noopServiceWorkerMiddleware());
  },
  overlay: {
    warnings: true,
    errors: true
  }
};
