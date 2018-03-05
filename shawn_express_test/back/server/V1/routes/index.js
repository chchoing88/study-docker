const user      = require( './user' );
const express   = require( 'express' );
const router    = express.Router();
const route     = {};
const routerMap = { user};

route.load = ( routerName ) => routerMap[ routerName ];

router.get( '/', ( req, res ) => res.render( 'pages/index', { msg: 'hello index' } ) );

route.init = () => router;

module.exports = route;