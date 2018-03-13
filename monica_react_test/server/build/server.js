'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = 4001;

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', _express2.default.static(__dirname + '/../public'));

app.get('/api/hello', function (req, res) {
  var data = [{ msg: 'what!' }, { msg: 'Welcome!' }];
  res.send(data);
});

var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});