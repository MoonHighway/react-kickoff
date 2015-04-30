var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000);

console.log("Server listening on port 3000");

module.exports = app;
