const express = require( 'express' );
const router  = express.Router();

router.get( '/access', ( req, res ) => {
	if ( req.session.user ) {
		res.redirect( '/store' );
	} else {
		res.redirect( '/user-login' );
	}
} );

router.get( '/loginAlready', ( req, res ) => {
	res.render( 'pages/user/loginAlready', {msg:`어머, 이미 로그인하셨어요`} );
} );


module.exports = router;