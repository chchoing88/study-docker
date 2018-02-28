const express = require( 'express' );
const service = require( './../service' );
const router  = express.Router();
const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( 'data check Time: ', Date.now() );
	next();
} );

router.get( '/', ( req, res ) => method.showUsers( res ) );

router.get( '/:username', ( req, res ) => method.showUser( req, res ) );

router.post( '/', ( req, res ) => method.createUser( req, res ) );

router.put( '/:username', ( req, res ) => method.updateUser( req, res ) );

router.delete( '/:username', ( req, res ) => method.removeUser( req, res ) );

module.exports = router;