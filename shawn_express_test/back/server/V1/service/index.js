const passport = require('passport');

const method = {};

method.login = passport.authenticate('local-login', {
	successRedirect:'/',
	failureRedirect:'/user/login'
});

module.exports = method;