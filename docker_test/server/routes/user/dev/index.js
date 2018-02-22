const fs   = require('fs');
const path = require('path');
const dev          = {};
const testFilePath = path.join(__dirname, '..','..', '..', 'database', 'test', 'test.json');

dev.get = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
  fs.readFile(testFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    res.end(JSON.stringify(JSON.parse(data)))
  });
};


module.exports = dev;