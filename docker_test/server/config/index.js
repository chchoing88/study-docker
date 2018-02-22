const path = require( 'path' );

module.exports = {
  server_port    : 3000,
  express_session: {
    secret           : 'my key',
    resave           : true,
    saveUninitialized: true
  },
  view_engine    : {
    defaultLayout: 'index',
    extname      : '.hbs',
    layoutsDir   : path.join( __dirname, '..', 'views', 'layouts' ),
    partialsDir  : path.join( __dirname, '..', 'views', 'partials' )
  },
  db_url         : 'mongodb://localhost/test',
  db_test_path   : '',
  db_schemas     : [
    { file: './user_schema', collection: 'user', schemaName: 'userchema', modelName: 'UserModel' }
  ],
  route_schemas  : [
    //=== index ===//
    { file: './', path: '/', method: 'get', type: 'get' },
    //=== user ===//
    { file: './user', path: '/user', method: 'get', type: 'get' },
    { file: './user', path: '/user/:name', method: 'hello', type: 'get' },
    { file: './user', path: '/user', method: 'post', type: 'post' },
    { file: './user', path: '/user', method: 'put', type: 'put' },
    { file: './user', path: '/user', method: 'delete', type: 'delete' },
    { file: './user', path: '/user-login', method: 'login', type: 'get' },
    //=== user-dev ===//
    { file: './user/dev', path: '/user-dev', method: 'get', type: 'get' },
    //{file: './dev',   path: '/dev/:mode',   method: 'mode',     type: 'get'},
    //{file: './dev',   path: '/dev',         method: 'post',     type: 'post'},
    //{file: './dev',   path: '/dev',         method: 'put',      type: 'put'},
    //{file: './dev',   path: '/dev',         method: 'delete',   type: 'delete'}
  ],
  error_handler  : {
    static: {
      '404': path.join( __dirname, '..', 'public', 'error', 'index.html' )
    }
  }
};