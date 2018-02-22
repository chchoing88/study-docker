const express             = require( 'express' );
const app                 = express();
const path                = require( 'path' );
const config              = require( './config' );
const cookieParser        = require( 'cookie-parser' );
const expressSession      = require( 'express-session' );
const mongoose            = require( 'mongoose' );
const database            = mongoose.connection;
const Test                = require( './model/test' );
const router              = require( './routes' );
const store               = require( './routes/store' );
const error               = require( './routes/error' );
const api_test            = require( './routes/api/test' );
const cookie              = require( './routes/process/cookie' );
const session             = require( './routes/process/session' );
const logger              = require( './log' );
const tester              = require( './test' );
const expressHbs          = require( 'express-handlebars' );
const expressErrorHandler = require( 'express-error-handler' );
const errorHandler        = expressErrorHandler( config.error_handler );
const viewPath            = path.join( __dirname, 'views' );
const bodyParser          = require( 'body-parser' );

//데이터베이스 설정
database.on( 'error', console.error );
database.once( 'open', () => {console.log( 'Connected to mongo server' );} );
mongoose.connect( "mongodb://mongo-db:27017/test" );

//엔진 설정
app.engine( '.hbs', expressHbs( config.view_engine ) );

//속성 설정
app.set( 'port', config.server_port || 3000 );
app.set( 'views', path.join( viewPath ) );
app.set( 'view engine', '.hbs' );

//미들웨어 설정
app.use(bodyParser.json()); // for parsing application/json - test 중
app.use(bodyParser.urlencoded(config.body_parser)); // for parsing application x-www-form-urlencoded - test 중

app.use( logger );
app.use( tester );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( 'static', express.static( path.join( __dirname, 'public' ) ) );

//쿠키 설정 - 라우터와 연계
app.use( cookieParser() );
//세션 설정 - 라우터와 연계
app.use( expressSession( config.express_session ) );

//라우트 설정 (모듈화된 라우트 객체를 미들웨어로 등록)
app.use( '/process/cookie', cookie );
app.use( '/process/session', session );
app.use( '/store', store );
api_test( app, Test );

//라우트 설정 (라우드 로드 함수를 이용해서 로드해보기)
router.load( '/', app, config.route_schemas );

//라우트 에러 페이지 설정
app.use( '*', error );

//에러 헨들러 설정
app.use( expressErrorHandler.httpError( 404 ) );
app.use( errorHandler );

//서버 설정
app.listen( app.get( 'port' ), () => console.log( 'server listening on port' + app.get( 'port' ) ) );

module.exports = app;
