const express = require( 'express' );
const router = express.Router();

router.get( '/', function ( req, res ) {
	res.render( 'pages/user/index',
	            {
		            msg: `이런 뭔가 보여드리고 싶은게 있었는데... 잠시후 다시 시도해 주세요.`,
		            data: `can not find page`
	            } );
} );


module.exports = router;