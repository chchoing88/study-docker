const express = require('express');
const router  = express.Router();
const route = {};

route.get = (req, res) => {
  res.render('pages/user/index',{msg:`type : get`})
};

route.load = (rootPath, app, schemas) => {
  schemas.forEach((scma) => {
    let fileName   = scma.file;
    let reqPath    = scma.path;
    let reqType    = scma.type;
    const file     = require(fileName);
    const callback = file[scma.method];

    app.route(reqPath)[reqType](callback);
  });

  app.use(rootPath, router);
};

module.exports = route;