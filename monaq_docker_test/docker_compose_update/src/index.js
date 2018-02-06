const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const router = require('./router/main')(app);

mongoose.connect('mongodb://mongo/node');

app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
  console.log("Express server has started on port 3000")
})

