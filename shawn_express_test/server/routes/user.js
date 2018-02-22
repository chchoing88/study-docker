const express = require( 'express' );
const service = require( './../service' );
const router  = express.Router();
const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( 'data check Time: ', Date.now() );
	next();
} );

router.get( '/', method.showUser );
router.post( '/', method.insertUser );

module.exports = router;