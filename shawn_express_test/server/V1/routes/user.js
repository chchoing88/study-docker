const express = require( 'express' );
const router  = express.Router();
// const service = require( '../service/index' );
// const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( 'User routing start : ', Date.now() );
	next();
} );

// 유저 홈 화면 조회 get
router.get('/', (req,res)=>{
	res.render('pages/index', {msg:'user home'});
});

// 로그인 화면 조회 get
router.get('/login',(req,res)=>{
	res.render('pages/index', {msg:'user login'});
});

// 로그인 요청 post
router.post('/login');

// 회원가입 화면 조회 get
router.get('/signup',(req,res)=>{
	res.render('pages/index', {msg:'user signup'});
});

// 회원가입 요청 post
router.post('/signup');

// 프로필 화면 조회 get
router.get('/profile', (req,res)=>{
	res.render('pages/index', {msg:'user profile'});
});

// 로그아웃 요청 get
router.get('/logout', (req,res)=>{
	res.render('pages/index', {msg:'user logout'});
});

module.exports = router;