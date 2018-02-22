'use strict';

const config              = require( './config' );
const express             = require( 'express' );
const app                 = express();
const path                = require( 'path' );
const expressHbs          = require( 'express-handlebars' );
const bodyParser          = require( 'body-parser' );
const expressErrorHandler = require( 'express-error-handler' );
const errorHandler        = expressErrorHandler( config.error_handler );
const mongoose            = require( 'mongoose' );
const database            = mongoose.connection;
const model               = require( './models' );
const apiUser             = require( './routes/user' );


//데이터베이스 설정
database.on( 'error', console.error );
database.once( 'open', () => console.log( 'Connected to mongo server' ) );
mongoose.connect( config.mongo_db_url );

//뷰 엔진 설정
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', '.hbs' );
app.engine( '.hbs', expressHbs( config.view_engine_options ) );

//미들웨어 설정
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( config.body_parser ) ); // for parsing application x-www-form-urlencoded

app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( '/static', express.static( path.join( __dirname, 'public' ) ) );

//라우팅 설정
apiUser(app, model.loadSchema( 'user' ));

// 앱
app.get( '/', ( req, res ) => {
	res.render( 'pages/index', { msg: 'hello world' } );
} );


//라우트 에러 페이지 설정
// app.use( '*', error );

//에러 헨들러 설정
app.use( expressErrorHandler.httpError( 404 ) );
app.use( expressErrorHandler.httpError( 403 ) );
app.use( expressErrorHandler.httpError( 502 ) );
app.use( expressErrorHandler.httpError( 500 ) );
app.use( errorHandler );

//서버 설정
app.listen( config.server_port, config.server_host, () => console.log( `Running on shttp://${config.server_host}:${config.server_port}` ) );
