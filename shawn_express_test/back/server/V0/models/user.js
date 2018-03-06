module.exports = {
	userId         : String,
	userPwd        : String,
	registered_date: {
		type   : Date,
		default: Date.now
	}
};