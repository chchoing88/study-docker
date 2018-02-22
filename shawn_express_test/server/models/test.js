module.exports = {
	title        : String,
	count        : Number,
	isPassed     : Boolean,
	executed_date: {
		type   : Date,
		default: Date.now
	}
};