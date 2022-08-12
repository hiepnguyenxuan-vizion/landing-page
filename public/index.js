const compression = require('compression');
var express = require('express');

var server = express();
server.use(compression());

var indexFile = 'index.html',
  path = '/home/site/wwwroot';

server.use('/', express.static(path, { index: indexFile }));

server.get('*', function (req, res) {
  res.sendFile(path + '/' + indexFile);
});
server.listen(process.env.PORT);
