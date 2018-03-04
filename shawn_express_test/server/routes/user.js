const express = require( 'express' );
const service = require( './../service' );
const router  = express.Router();
const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( 'User Check Time: ', Date.now() );
	next();
} );

// 모든 유저 리스트를 JSON 형태로 노출
router.get( '/json', ( req, res ) => method.showUsers( res ) );

// 유저 한명의 정보를 JSON 형태로 노출
router.get( '/json/:username', ( req, res ) => method.showUser( req, res ) );

// 유저 리스트에 유저 정보 추가
router.post( '/json', ( req, res ) => method.createUser( req, res ) );

// 유저 한명의 정보를 업데이트
router.put( '/json/:username', ( req, res ) => method.updateUser( req, res ) );

// 유저 한명의 정보를 삭제
router.delete( '/json/:username', ( req, res ) => method.removeUser( req, res ) );

// 가입 날짜 기준 유저 정보 삭제
router.delete( '/json/remove/date/:date', ( req, res ) => method.removeUserByDate( req, res ) );

// 유저 한명의 등록
router.get( '/register', ( req, res ) => res.render( 'pages/user/register', { msg: 'register' } ) );

// 유저 한명의 로그인
router.get( '/login/:username', ( req, res ) => {} );

// 유저 한명의 로그아웃
router.get( '/logout/:username', ( req, res ) => {} );

module.exports = router;