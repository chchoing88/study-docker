import express from 'express';

const app = express();

let port = 4001;


// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../public'));

app.get('/api/hello', (req, res) => {
  let data = [
    { msg: 'what!' },
    { msg: 'Welcome!' }
  ];
  res.send(data);
});

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});