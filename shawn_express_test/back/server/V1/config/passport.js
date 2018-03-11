const passport      = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy; // 로컬에서 값을 비교할 수 있게 해주는 모듈
const model         = require( '../models' );
const Users         = model.getSchema( 'user' );

// passport 구동을 위한 두가지 콜백 정의 : 필수 (serialize,deserialize)
const serialize   = ( user, done ) => { // Strategy 성공 시 호출됨
	console.log( 'passport:serializeUser' );
	done( null, user ); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
};
const deserialize = ( user, done ) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
	console.log( 'passport:deserializeUser' );
	done( null, user ); // 여기의 user가 req.user가 됨
};

// passport strategy 정
const strategy = {};

// Local strategy 정의
strategy.local = {
	eventName: 'local-login',
	option   : {
		usernameField    : 'userEmail',
		passwordField    : 'userPwd',
		session          : true, // 세션에 저장 여부
		passReqToCallback: false
	},
	callback : ( userEmail, userPwd, done ) => {
		console.log( 'passport:local-login callback' );
		Users.findOne( { userEmail: userEmail }, ( err, user ) => {
			if ( err ) return done( err ); // 서버 에러 처리
			// if (!user) return done(null, false, { message: '존재하지 않는 아이디입니다' }); // 임의 에러 처리
			return user.comparePassword( userPwd, ( err, isMatch ) => {
				console.log( 'pwd:isMatch : ', isMatch );
				if ( isMatch ) {
					return done( null, user ); // 검증 성공
				}
				// return done(null, false, { message: '비밀번호가 틀렸습니다' }); // 임의 에러 처리
			} );
		} );
	}
};

// Facebook strategy 정의
strategy.facebook = {};
// Kakao strategy 정의
strategy.kakao    = {};
// Naver strategy 정의
strategy.naver    = {};

module.exports = () => {
	passport.serializeUser( serialize );
	passport.deserializeUser( deserialize );
	passport.use( strategy.local.eventName, new LocalStrategy( strategy.local.option, strategy.local.callback ) );
};