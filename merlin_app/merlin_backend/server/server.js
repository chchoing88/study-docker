'use strict';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = require('./routes');
const database = mongoose.connection;

// 상수
const PORT = 3000;
const HOST = '0.0.0.0';

// 앱
const app = express();
let viewPath = path.join(__dirname, 'views');

//뷰 엔진 설정
app.set('view engine', '.hbs');
app.set('views', viewPath);
app.engine('.hbs', expressHbs({
  defaultLayout: 'index',
  extname: '.hbs',
  layoutsDir: path.join(viewPath, 'layouts'),
  partialsDir: path.join(viewPath, 'partials')
})
);
app.use(express.static(path.join(__dirname, 'static')));
app.use('/static', express.static(path.join(__dirname, 'public')));

//미들웨어 설정
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: false
})
); // for parsing application x-www-form-urlencoded
app.use('/', router);


//데이터베이스 설정
database.on('error', console.error);
database.once('open', () => { console.log('Connected to mongo server'); });
mongoose.connect("mongodb://mongo-db:27017/test");

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);