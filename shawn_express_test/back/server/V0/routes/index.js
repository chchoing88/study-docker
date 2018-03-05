const user      = require( './user' );
const test      = require( './test' );
const login     = require( './login' );
const express   = require( 'express' );
const router    = express.Router();
const route     = {};
const routerMap = { user, test, login };

route.load = ( routerName ) => routerMap[ routerName ];

router.get( '/', ( req, res ) => res.render( 'pages/index', { msg: 'hello index' } ) );

route.init = () => router;

module.exports = route;