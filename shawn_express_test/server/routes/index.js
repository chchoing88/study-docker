const user      = require( './user' );
const route     = {};
const routerMap = { user };

route.load = ( routerName ) => routerMap[ routerName ];

module.exports = route;