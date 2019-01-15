var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var dataSourceRouter = require('./routes/dataSource');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set default content type to JSON
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.use('/', indexRouter);
app.use('/datasource', dataSourceRouter);

module.exports = app;
