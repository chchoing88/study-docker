'use strict';

const config         = require( './config' );
const router         = require( './routes' );
const express        = require( 'express' );
const app            = express();
const mongoose       = require( 'mongoose' );
const database       = mongoose.connection;
const path           = require( 'path' );
const publicPath     = path.join( __dirname, 'public' );
const viewPath       = path.join( __dirname, 'views' );
const bodyParser     = require( 'body-parser' );
const expressSession = require( 'express-session' );

//데이터베이스 설정
database.on( 'error', console.error );
database.once( 'open', () => console.log( 'Connected to mongo server' ) );
mongoose.connect( config.mongo_db_url );

//뷰 엔진 설정 - pug ( jade )
app.set( 'views', viewPath );
app.set( 'view engine', 'pug' );
// pug 는 내부적으로 app.engine 을 셋팅하기 때문에 따로 설정할 필요는 없다.
// pug 는 요청이 들어올때마다 랜더링을 이용해서 다시 탬플릿을 그리기 때문에 성능상 문제가 될 수 있다.
// 템플릿 케싱을 이용해서 문제를 해결 할 수 있다.

//미들웨어 설정
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( config.body_parser ) ); // for parsing application x-www-form-urlencoded
app.use( express.static( publicPath ) );
app.use( '/public', express.static( publicPath ) );

//세션설정
//세션 설정 - 라우터와 연계
app.use( expressSession( config.express_session ) );

//라우팅 설정
app.use( '/', router.init() );
app.use( '/auth', router.load( 'login' ) );
app.use( '/user', router.load( 'user' ) );
app.use( '/test', router.load( 'test' ) );

//라우트 에러 페이지 설정
// app.use( '*', error );

//서버 설정
app.listen( config.server_port, config.server_host, () => console.log( `Running on shttp://${config.server_host}:${config.server_port}` ) );
