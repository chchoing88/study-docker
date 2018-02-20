const Models = require('../models');

module.exports = function(app, dummyList)
{
  app.get('/',function(req,res){
    res.render('index.html');
  });
  app.get('/about',function(req,res){
    res.render('about.html');
  });

  app.get('/view', function (req,res) {
    dummyList.find( {}, function (ree, docs) {
      if(ree) res.json(err);
    })
  })

}
