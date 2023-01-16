'use strict';

const createError = require('http-errors');
const express = require('express');
const compression = require('compression');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');



const routes = require('./routes/index.js');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(__dirname + '/public/images/Favicon.webp'));
app.use(express.static(__dirname + 'public'));
app.use('*/js' ,express.static(path.join(__dirname, 'public/js')));
app.use('*/css',express.static(path.join(__dirname, 'public/css')));
app.use('*/images',express.static(path.join(__dirname, 'public/images')));

app.use(function (req, res, next) {
  if (req.hostname === 'kinesishouse.cl') {
    res.redirect(301, 'http://www.kinesishouse.cl' + req.path);
    return ;
  }
  next();
});
// routes
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res ) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
