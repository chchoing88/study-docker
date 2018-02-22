'use strict';

const express = require('express');
const app = express();
const mongoose            = require( 'mongoose' );
const database            = mongoose.connection;
const bodyParser = require('body-parser');
const router = express.Router();

//model
const Bear = require('./models/bear')

// express 설정 - bodyparser
app.use(bodyParser.urlencoded({ exrended: true }));
app.use(bodyParser.json());

// 상수
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// // 앱
app.get('/', (req, res) => {
  res.send('Hello FT\n');
});

router.use(function (req, res, next) {
  console.log('logging');
  next(); // 멈추지 않고 다음 라우트로 넘어감.
});

router.route('/bears').post(function (req, res) {
  const bear = new Bear();
  bear.name = req.body.name;

  bear.save(function (err) {
    if(err) {
      res.send(err);
    } else {
      res.json({message:'bear created'})
    }
  })
}).get(function (req, res) {
  Bear.find(function (err, bears) {
    if(err) {
      res.send(err);
    } else {
      res.json(bears)
    }
  })
});

router.route('/bears/:bear_id')
  // http://.../api/bears/:bear_id)
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);
      res.json(bear);
    });
  });

router.get('/', function (req, res) {
  res.json({ message: 'hahaha'});
})

app.use('/api', router);

//데이터베이스 설정
database.on( 'error', console.error );
database.once( 'open', () => {console.log( 'Connected to mongo server' );} );
mongoose.connect( "mongodb://mongo-db:27017/test" );

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);