const model  = require( './../models' );
const User   = model.load( 'user' );
const method = {};

method.showUsers = ( res ) =>
	User.find( ( err, users ) => err ? res.json( err ) : res.json( users ) );

method.showUser = ( req, res ) =>
	User.find( { name: req.params.username }, ( err, user ) => err ? res.json( err ) : res.json( user ) );

method.createUser = ( req, res ) => {
	const user  = new User();
	user.name   = req.body.name;
	user.age    = req.body.age;
	user.living = req.body.living;
	return user.save( ( err ) => err ? res.json( err ) : res.json( { status: 200 } ) );
};

method.updateUser = ( req, res ) =>
	User.update( { name: req.params.username }, { $set: req.body }, ( err, output ) => err ? res.json( err ) : res.json( output ) );

method.removeUser = ( req, res ) =>
	User.remove( { name: req.params.username }, ( err, output ) => err ? res.json( err ) : res.json( output ) );

module.exports = method;