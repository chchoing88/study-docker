const model  = require( '../models' );
const User   = model.load( 'user' );
const method = {};

//user
method.showUsers = ( res ) =>
	User.find( ( err, users ) =>
							 err ? res.json( err ) : res.json( users ) );

method.showUser = ( req, res ) =>
	User.find( { userId: req.params.username }, ( err, user ) =>
		err ? res.json( err ) : res.json( user ) );

method.createUser = ( req, res ) => {
	const user   = new User();
	user.userId  = req.body.userId;
	user.userPwd = req.body.userPwd;
	return user.save( ( err ) =>
											err ? res.json( err ) : res.json( { status: 200 } ) );
};

method.updateUser = ( req, res ) =>
	User.update( { userId: req.params.username }, { $set: req.body }, ( err, output ) =>
		err ? res.json( err ) : res.json( output ) );

method.removeUser = ( req, res ) =>
	User.remove( { userId: req.params.username }, ( err, output ) =>
		err ? res.json( err ) : res.json( output ) );

method.removeUserByDate = ( req, res ) => {
	User.remove( { registered_date: req.params.date }, ( err, output ) => {
		return err ? res.json( err ) : res.json( output );
	} );
};

//login
method.login = ( req, res ) => {
	// 데이터가 있는 아이디가 있는지 확인
	
	User.find( { userId: req.body.userId, userPwd: req.body.userPwd }, ( err, user ) => {
		// N : 로그인 실패 페이지로 redirect
		if ( err ) {
			res.redirect( '/user/json' )
		}
		
		// Y : express-session 에 등록 (	이미 로그인 했는지 확인 )
		if ( req.session.user ) {
			//이미 로그인이 되어 있는 상태
			res.redirect( '/user/json' )
		} else {
			//세션 저장
			req.session.user = {
				id        : req.body.userId,
				authorized: true
			};
			res.json( user );
			console.log( req.session.user );
		}
	} );
	
};

//logout
method.logout = ( req, res ) => {
	User.find( { userId: req.body.userId, userPwd: req.body.userPwd }, ( err, user ) => {
		// N : 로그인 실패 페이지로 redirect
		if ( err ) {
			console.log('logout err');
			res.redirect( '/user/json' );
		}
		if ( req.session.user ) {
			console.log('start logout');
			//이미 로그인이 되어 있는 상태
			console.log( req.session.destory() );
			res.redirect( '/user/json' );
			console.log( req.session.user );
		}
	} );
};


module.exports = method;