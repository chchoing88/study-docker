module.exports = {
	name           : String,
	age            : Number,
	living         : Boolean,
	registered_date: {
		type   : Date,
		default: Date.now
	}
};