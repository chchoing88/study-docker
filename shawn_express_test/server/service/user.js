const model  = require( './../models' );
const Schema = model.load( 'user' );
const method = {};

method.showUser = ( req, res ) => {
	Schema.find( ( err, users ) => err ? res.json( err ) : res.json( users ) );
};

method.insertUser = ( req, res ) => {
	const user  = new Schema();
	user.name   = req.body.name;
	user.age    = req.body.age;
	user.living = req.body.living;
	user.save( ( err ) => err ? res.json( err ) : res.json( { status: 200 } ) );
};

module.exports = method;