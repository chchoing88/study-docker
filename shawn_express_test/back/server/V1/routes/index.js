const user      = require( './user' );
const express   = require( 'express' );
const router    = express.Router();
const route     = {};
const routerMap = { user};

router.get( '/', ( req, res ) => res.render( 'pages/index', { msg: 'hello index' } ) );

route.init = () => router;

route.load = ( routerName ) => routerMap[ routerName ];

module.exports = route;