module.exports = ( app ) => {
	//서버포트 설정
	app.set( 'port', 3000 );
	//서버호스트 설정
	app.set( 'host', '0.0.0.0' );
	//바디 파서 ( 옵션값 기입 )
	app.set( 'body-parser', { extended: false } );
	//데이터베이스 설정 ( 경로 )
	app.set( 'db-url', 'mongodb://mongo-db:27017/test' );
};