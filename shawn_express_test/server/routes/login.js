const express = require( 'express' );
const service = require( './../service' );
const router  = express.Router();
const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( '로그인 라우팅에 대한 프로세스를 시작합니다.' );
	next();
} );
//
router.get( '/', ( req, res ) => {
	res.render( 'pages/login' );
} );
//
router.post( '/login', ( req, res ) => method.login( req, res ) );
router.post( '/logout', ( req, res ) => method.logout( req, res ) );

module.exports = router;