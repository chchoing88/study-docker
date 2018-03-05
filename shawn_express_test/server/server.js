'use strict';

const setup      = require( './V1/config' );
const router     = require( './V1/routes' );
const express    = require( 'express' );
const app        = express();
const mongoose   = require( 'mongoose' );
const database   = mongoose.connection;
const path       = require( 'path' );
const publicPath = path.join( __dirname, 'V1', 'public' );
const viewPath   = path.join( __dirname, 'V1', 'views' );
const bodyParser = require( 'body-parser' );

// 설정 셋업
setup( app );

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


// 미들웨어 설정
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( app.get( 'body-parser' ) ) ); // for parsing application x-www-form-urlencoded
app.use( express.static( publicPath ) );
app.use( '/public', express.static( publicPath ) );

// 라우팅 설정
app.use( '/', router.init() );
app.use( '/user', router.load( 'user' ) );

// 라우트 에러 페이지 설정
app.use( '*', (req,res)=>{
	res.render('pages/index',{msg:'보여드리고 싶은게 있었는데 지금은 찾을 수 없네요, 잠시 후 다시 시도해 주세요.'});
} );

// 서버 설정
app.listen( app.get( 'port' ), app.get( 'host' ), () => {
	console.log( `Running on shttp://${app.get( 'host' )}:${app.get( 'port' )}` );
} );
