var express = require('express');
var path = require('path');

var app = express();
var rootPath = path.normalize(__dirname + "/");


app.use(express.static(rootPath));
app.use('/node_modules', express.static( rootPath + 'node_modules'));
//app.use('/node_modules/rxjs/operators', express.static( rootPath + 'node_modules/rxjs/operator'));

app.get('/package.json', function(req, res) { res.sendFile(rootPath + 'package.json'); });
app.use('/node_modules/*', function(req, res) { res.send(404);});
//app.get('/', function(req, res) { res.sendFile(rootPath + 'index.html'); });
app.get('*', function(req, res) { res.sendFile(rootPath + 'index.html'); });

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');