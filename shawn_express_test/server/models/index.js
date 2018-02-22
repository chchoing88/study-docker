const mongoose  = require( 'mongoose' );
const Schema    = mongoose.Schema;
const model     = {};
const user      = require( './user' );
const schemaMap = {
	user: user
};

model.loadSchema = ( schemaName ) => mongoose.model( schemaName, new Schema( schemaMap[ schemaName ] ) );

module.exports = model;
