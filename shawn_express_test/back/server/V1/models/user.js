const mongoose   = require( 'mongoose' );
const Schema     = mongoose.Schema;

// 스키마 서식 정의
const userModel  = {
	userEmail : { type: String, default: '' },
	userPwd   : { type: String, default: '' },
	userName  : { type: String, default: '' },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
};

// 스키마 생성
const userSchema = new Schema( userModel );

// 스키마에 메서드 영역 생성
userSchema.methods = {};

// 비밀번호 비교 메서드;
userSchema.methods.comparePassword = function ( userPwd, callback ) {
	console.log( 'userSchema.method:comparePassword : ', userPwd === this.userPwd );
	if ( userPwd === this.userPwd ) {
		callback( null, true );
	} else {
		callback( 'error' );
	}
};

// userSchema.path( 'userEmail' ).validate( ( userEmail ) => {
// 	return userEmail.length;
// }, `email 컬럼 값이 없습니다.` );
//
// userSchema.path( 'userPwd' ).validate( ( userPwd ) => {
// 	return userPwd.length;
// }, `password 컬럼 값이 없습니다.` );
//
// userSchema.static( 'findByUserEmail', function ( userEmail, callback ) {
// 	return this.find( { userEmail: userEmail }, callback );
// } );
//
// userSchema.static( 'findAll', function ( callback ) {
// 	return this.find( {}, callback );
// } );

module.exports = mongoose.model( 'user', userSchema );