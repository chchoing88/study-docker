//const errorOverlayMiddleware = require('react-error-overlay');
const noopServiceWorkerMiddleware = require('noop-service-worker-middleware');

module.exports = {
    devServer: {
        public: "nodeapp.local:3001",
        inline: true, // live reloading insert bundle..
        hot: true, // hot module reloading
        compress: true, // enable gzip compression
        historyApiFallback: true,
        before(app) {
            //app.use(errorOverlayMiddleware());
            app.use(noopServiceWorkerMiddleware());
        }
    }
}