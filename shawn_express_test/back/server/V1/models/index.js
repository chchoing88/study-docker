const user      = require( './user' );
const model     = {};
const schemaMap = { user };

model.getSchema = ( schemaName ) => schemaMap[ schemaName ];

module.exports = model;