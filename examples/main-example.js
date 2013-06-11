var nero = require('../lib/nero');

nero.listen(80);
nero.publicDirectory(__dirname + '/public');

nero.addRoute('GET', '/', function (req, res) {
  res.end('get');
});
nero.addRoute('POST', '/', function (req, res) {
  res.end('post');
});