const user      = require( './user' );
const express   = require( 'express' );
const router    = express.Router();
const route     = {};
const routerMap = { user };
const model     = require( '../models' );
const User      = model.getSchema( 'user' );

router.get( '/', ( req, res ) => {
	res.render( 'pages/index', { msg: 'hello index' } )
} );

router.get( '/test', ( req, res ) => {
	User.find( ( err, users ) =>
							 err ? res.json( err ) : res.json( users ) );
} );

router.post( '/test', ( req, res ) => {
	const user     = new User();
	user.userEmail = req.body.userEmail;
	user.userPwd   = req.body.userPwd;
	user.userName  = req.body.userName;
	return user.save( ( err ) =>
											err ? res.json( err ) : res.json( { status: 200 } ) );
} );

router.delete('/test', ( req, res ) =>
	User.remove( { userEmail: req.body.userEmail }, ( err, output ) =>
		err ? res.json( err ) : res.json( output )
	)
);

route.init = () => router;

route.load = ( routerName ) => routerMap[ routerName ];

module.exports = route;