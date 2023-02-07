var router = require('./routes/routes');
var express = require('express');


var app = express();

app.use(express.json())

app.use(router);


module.exports = app;