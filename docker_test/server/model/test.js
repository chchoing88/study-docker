const mongoose   = require( 'mongoose' );
const Schema     = mongoose.Schema;
const testSchema = {
	title         : String,
	author        : String,
	published_date: {
		type   : Date,
		default: Date.now
	}
};

module.exports = mongoose.model( 'test', new Schema( testSchema ) );