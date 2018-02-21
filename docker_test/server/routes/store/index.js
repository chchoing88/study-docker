const express = require( 'express' );
const router = express.Router();
const fs = require( 'fs' );
const path = require( 'path' );
const testFilePath = path.join( __dirname, '..', '..', 'database', 'test', 'test.json' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( function timeLog( req, res, next ) {
	console.log( 'Time: ', Date.now() );
	next();
} );

// define the home page route
router.get( '/', function ( req, res ) {
	fs.readFile( testFilePath, 'utf8', ( err, data ) => {
		if ( err ) throw err;
		res.render( 'pages/user/index', { msg: `type : get`, data: JSON.parse( data ) } )
	} );
} );
// define the about route
router.get( '/:giftName', function ( req, res ) {
	fs.readFile( testFilePath, 'utf8', ( err, data ) => {
		if ( err ) throw err;
		res.render( 'pages/user/index', { msg: req.params.giftName, data: JSON.parse( data ) } )
	} );
} );

module.exports = router;