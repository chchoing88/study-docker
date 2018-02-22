const user       = require( './user' );
const service    = {};
const serviceMap = { user };

service.load = ( serviceName ) => serviceMap[ serviceName ];

module.exports = service;