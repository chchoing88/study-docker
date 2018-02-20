const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models')

const router = require('./router/main')(app, Post);



app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
mongoose.connect('mongodb://localhost:27017/dummydb');

const db = mongoose.connection
db.on('error', console.error)
db.once('open', function () {
  console.log('db connected')
})



var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000");
})

