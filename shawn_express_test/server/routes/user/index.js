module.exports = ( app, Schema ) => {
	
	app.get( '/', ( req, res ) => {
		Schema.find( ( err, users ) => {
			if ( err ) {
				return res.status( 500 ).send( { error: 'database failure' } );
			}
			res.json( users );
		} )
	} );
	
	app.post( '/', ( req, res ) => {
		const user  = new Schema();
		user.name   = req.body.name;
		user.age    = req.body.age;
		user.living = req.body.living;
		
		user.save( ( err ) => {
			if ( err ) {
				console.error( err );
				res.json( { result: 0 } );
				return;
			}
			res.json( { result: 1 } );
		} );
		
	} );
};