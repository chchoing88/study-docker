'use strict';
const config     = require( './config' );
const router     = require( './routes' );
const express    = require( 'express' );
const app        = express();
const mongoose   = require( 'mongoose' );
const db         = mongoose.connection;
const path       = require( 'path' );
const publicPath = path.join( __dirname, 'public' );
const viewPath   = path.join( __dirname, 'views' );
const bodyParser = require( 'body-parser' );
const passport   = require( 'passport' );
const session    = require( 'express-session' );

// 설정 셋업
config.init( app ); // 엡 구동을 위한 설정 값 및 함수들 기입 app.set 으로 등록 후 app.get 으로 사용

// 데이터베이스 설정
db.on( 'error', console.error );
db.once( 'open', () => console.log( 'Connected to mongo server' ) );
mongoose.connect( app.get( 'db-url' ) );

// 뷰 엔진 설정 - pug ( jade )
// pug 는 내부적으로 app.engine 을 셋팅하기 때문에 따로 설정할 필요는 없다.
// pug 는 요청이 들어올때마다 랜더링을 이용해서 다시 탬플릿을 그리기 때문에 성능상 문제가 될 수 있다.
// 템플릿 케싱을 이용해서 문제를 해결 할 수 있다.
app.set( 'views', viewPath );
app.set( 'view engine', 'pug' );

// 세션 설정
app.use( session( {
										secret           : 'my key',
										resave           : true,
										saveUninitialized: true
									} ) );
// 패스포트 설정
app.use( passport.initialize() ); // passport 구동
app.use( passport.session() ); // 세션 연결
app.get( 'passport-config' )(); // config.passport.js 참조

// 미들웨어 설정
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( app.get( 'body-parser' ) ) ); // for parsing application x-www-form-urlencoded
app.use( express.static( publicPath ) );
app.use( '/public', express.static( publicPath ) );

// 로그인 여부 확인 미들웨어
app.use((req,res,next)=>{
	console.log('isAuthenticated ? ',req.isAuthenticated());
	next();
});

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
