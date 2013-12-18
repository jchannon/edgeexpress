var express = require('express');
var edge = require('edge');
var index = require('./index.js');
var db = require('./db.js');

var app = express();

app.get('/', index.home(db));

app.listen(999);
console.log('Listening on port 999')
