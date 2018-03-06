const mongoose   = require( 'mongoose' );
const userModel  = {
	userEmail : { type: String, default: '' },
	userPwd   : { type: String, default: '' },
	userName  : { type: String, default: '' },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
};
const userSchema = mongoose.Schema( userModel );

userSchema.path( 'userEmail' ).validate( ( userEmail ) => {
	return userEmail.length;
}, `email 컬럼 값이 없습니다.` );

userSchema.path( 'userPwd' ).validate( ( userPwd ) => {
	return userPwd.length;
}, `password 컬럼 값이 없습니다.` );

userSchema.static( 'findByUserEmail', function ( userEmail, callback ) {
	return this.find( { userEmail: userEmail }, callback );
} );

userSchema.static( 'findAll', function ( callback ) {
	return this.find( {}, callback );
} );

module.exports = userSchema;