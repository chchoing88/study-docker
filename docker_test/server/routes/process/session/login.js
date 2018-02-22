const login = {};

login.post = ( req, res ) => {
	let userId       = req.param( 'id' );
	let userPassword = req.param( 'password' );
	
	if(req.session.user){
		//이미 로그인이 되어 있는 상태
		res.redirect('/process/loginAlready')
	}else{
		//세션 저장
		req.session.user = {
			id:userId,
			authorized:true
		}
	}
	
};

module.exports = login;