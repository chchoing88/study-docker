const Todo = require('../todo-model');

module.exports = function(app)
{
  app.get('/',function(req,res){
    res.render('index.html')
  });
  app.get('/about',function(req,res){
    res.render('about.html');
  });

  app.get('/todo', function (req, res) {
    Todo.find()
      .exec()
      .then(todos => res.send('hello data'))
      .catch(err => res.send(err));
  });

  app.post('/todo', function (req, res) {
    const todo = new Todo(req.body);
    todo.save()
      .then(() => res.status(201).end())
      .catch(err => res.status(400).end());
  });

}
