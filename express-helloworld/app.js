var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mars/dev', function(req, res) {
  res.send('Hello..Mars...dev!\n');
});
app.get('/opt', function(req, res) {
  res.send('Hello..Teste..Ok!\n');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

