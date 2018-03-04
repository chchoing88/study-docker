/*
* 마지막 수정 : shawn.thecool
*
* config 는 server.js 에서 사용되는 기본 상수 및 옵션들의 집합 객체입니다
* 이곳에서 한번에 옵션값을 관리하고 server.js 의 가독성을 올리고, 여러군대에서 값을 끌어다 사용하기 위한 수단으로 생성하였습니다
*
* */

const path   = require( 'path' );
const config = {};
let viewPath = path.join( __dirname, '..', 'views' );

//서버포트 설정
config.server_port = 3000;

//서버호스트 설정
config.server_host = '0.0.0.0';

//뷰엔진 설정 ( 옵션값 기입 ) .hbs:handlebar 사용 및 레이아웃 / 파티얼 설정
config.view_engine_options = {
	defaultLayout: 'index',
	extname      : '.hbs',
	layoutsDir   : path.join( viewPath, 'layouts' ),
	partialsDir  : path.join( viewPath, 'partials' )
};

//바디 파서 ( 옵션값 기입 )
config.body_parser = {
	extended: false
};

//데이터베이스 설정 ( 경로 )
config.mongo_db_url = 'mongodb://mongo-db:27017/test';

//세션 설정 ( 옵션값 기입 )
config.express_session = {
	secret           : 'ErrorIsTheDisciplineThroughWhichWeAdvance',
	resave           : true,
	saveUninitialized: true
};

//익스프레스 에러핸들러 설정 ( 옵션값 기입 )
config.error_handler = {
	static: {
		'404': path.join( viewPath, 'error', 'err404.html' ),
		'403': path.join( viewPath, 'error', 'err403.html' ),
		'502': path.join( viewPath, 'error', 'err502.html' ),
		'500': path.join( viewPath, 'error', 'err500.html' )
	}
};

module.exports = config;