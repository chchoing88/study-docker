const express = require( 'express' );
const router  = express.Router();

//쿠기의 정보를 확인
router.get( '/', ( req, res ) => {
	res.send( req.cookies );
} );

//쿠키에 이름 정보를 설정
router.get( '/:id', ( req, res ) => {
	let guestId = req.params.id;
	res.cookie( guestId, {
		id: guestId,
		type: 'guest',
		authorized: guestId === 'shawn'
	} );
	res.redirect( '/process/cookie' );
} );


module.exports = router;