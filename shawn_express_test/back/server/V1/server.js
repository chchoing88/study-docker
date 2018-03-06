'use strict';

const config           = require( './config' );
const router           = require( './routes' );
const express          = require( 'express' );
const app              = express();
const mongoose         = require( 'mongoose' );
const database         = mongoose.connection;
const path             = require( 'path' );
const publicPath       = path.join( __dirname, 'public' );
const viewPath         = path.join( __dirname, 'views' );
const bodyParser       = require( 'body-parser' );
const passport         = require( 'passport' );
const passportStrategy = require( 'passport-local' );
const localStrategy    = passportStrategy.Strategy;
const flash            = require( 'connect-flash' );


// 설정 셋업
config.init( app );

// 데이터베이스 설정
database.on( 'error', console.error );
database.once( 'open', () => console.log( 'Connected to mongo server' ) );
mongoose.connect( app.get( 'db-url' ) );

// 뷰 엔진 설정 - pug ( jade )
// pug 는 내부적으로 app.engine 을 셋팅하기 때문에 따로 설정할 필요는 없다.
// pug 는 요청이 들어올때마다 랜더링을 이용해서 다시 탬플릿을 그리기 때문에 성능상 문제가 될 수 있다.
// 템플릿 케싱을 이용해서 문제를 해결 할 수 있다.
app.set( 'views', viewPath );
app.set( 'view engine', 'pug' );

// 패스포트 설정
app.use( passport.initialize() );
app.use( passport.session() );
app.use( flash() );
const authenticationName   = {
	userEmailField: 'userEmail',
	userPwdField  : 'userPwd'
};
const authenticationMethod = ( req, userEmail, userPwd, done ) => {
	console.log('passport local-login called');
	const db = app.get('database');
	db.userModel.findOne({'userEmail':userEmail},(err, user)=>{
		if(err){
			return done(err);
		}
		
		console.log(user);
	})
};
passport.use( 'local-login', new localStrategy( authenticationName, authenticationMethod ) );


// 미들웨어 설정
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( app.get( 'body-parser' ) ) ); // for parsing application x-www-form-urlencoded
app.use( express.static( publicPath ) );
app.use( '/public', express.static( publicPath ) );

// 라우팅 설정
app.use( '/', router.init() );
app.use( '/user', router.load( 'user' ) );

// 라우트 에러 페이지 설정
app.use( '*', ( req, res ) => {
	res.render( 'pages/index', { msg: '404' } );
} );

// 서버 설정
app.listen( app.get( 'port' ), app.get( 'host' ), () => {
	console.log( `Running on shttp://${app.get( 'host' )}:${app.get( 'port' )}` );
} );
