module.exports = ( app, Schema ) => {
	
	app.get( '/api/tests', ( req, res ) => {
		Schema.find( ( err, tests ) => {
			if ( err ) {
				return res.status( 500 ).send( { error: 'database failure' } );
			}
			
			res.json( tests );
		} )
	} );
	
	app.post( '/api/tests', ( req, res ) => {
		const test  = new Schema();
		test.title  = req.body.title;
		test.author = req.body.author;
		if ( test.published_date ) {
			test.published_date = new Date( req.body.published_date );
		}
		
		test.save( ( err ) => {
			if ( err ) {
				console.error( err );
				res.json( { result: 0 } );
				return;
			}
			
			res.json( { result: 1 } );
		} );
		
	} );
};
