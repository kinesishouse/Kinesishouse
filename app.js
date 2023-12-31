'use strict';

const createError = require('http-errors');
const express = require('express');
const robots = require('express-robots-txt');
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
app.use(express.static(__dirname + '/public'));
app.use('*/js' ,express.static(path.join(__dirname, 'public/js')));
app.use('*/css',express.static(path.join(__dirname, 'public/css')));
app.use('*/images',express.static(path.join(__dirname, 'public/images')));
app.use('/robots', express.static(path.join(__dirname, 'public/robots.txt')));
app.use('/sitemap', express.static(path.join(__dirname, 'public/sitemap.xml')));

app.use(function (req, res, next) {
  if (req.hostname === 'kinesishouse.cl') {
    res.redirect(301, 'http://www.kinesishouse.cl' + req.path);
    return ;
  }
  next();
});

// cambio a redireccion futura <<<<<<<<<<<<<<<<<<<<<<<<<<
//app.use(function (req, res, next) {
//  if (req.hostname === 'kinesishouse.cl') {
    // Redireccionar a https://www.kinesishouse.cl
//    res.redirect(301, 'https://www.kinesishouse.cl' + req.path);
//    return;
//  } else if (req.hostname === 'www.kinesishouse.cl' && req.protocol === 'http') {
    // Redireccionar http://www.kinesishouse.cl a https://www.kinesishouse.cl
//    res.redirect(301, 'https://www.kinesishouse.cl' + req.path);
//    return;
//  }
//  next();
//});


// routes
app.use(routes);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});
// catch 404 and forward to error handler
app.use(function(req, res) {
  // establece el código de estado HTTP del error
  res.status(404);

  // renderiza una página HTML personalizada en la carpeta views
  res.render('404', {
    title: 'Error 404 - Página no existe',
    message: 'Lo sentimos, la página que está buscando no se pudo encontrar en el servidor.'
  });
});
// error handler
app.use(function(err, req, res, next) {
  if (err) { // Verifica si 'err' está definido
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
  } else {
    // Si 'err' no está definido, establece valores predeterminados para 'res.locals'
    res.locals.message = 'Error desconocido';
    res.locals.error = {};

    // render the error page with default values
    res.status(500);
  }

  // Renderiza la página de error
  res.render('error');
});

module.exports = app;


