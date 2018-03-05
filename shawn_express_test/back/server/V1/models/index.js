const mongoose  = require( 'mongoose' );
const user      = require( './user' );
const Schema    = mongoose.Schema;
const model     = {};
const schemaMap = { user };

model.load = ( schemaName ) => mongoose.model( schemaName, new Schema( schemaMap[ schemaName ] ) );

// Schema.path( 'email' ).validate( ( email ) => email.length, `email 칼럼의 값이 없습니디.` );
// Schema.path( 'password' ).validate( ( password ) => password.length, `password 칼럼의 값이 없습니다.` );

module.exports = model;