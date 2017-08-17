var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

global.i18n = require('i18n');
i18n.configure({
    locales:['ru', 'en'],
    defaultLocale: 'en',
    queryParameter: 'lang',
    directory: __dirname + '/locales',
    cookiename: 'locale'
});
//i18n.setLocale('en');

var mongoose = require('mongoose');
var uristring =
    process.env.MONGODB_URI ||
    'mongodb://localhost/urandb';

var options = { promiseLibrary: require('bluebird') };
//var db = mongoose.createConnection(uristring, options);
global.db = mongoose.createConnection(uristring, options);
var db = global.db;

 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
     console.log ('Succeeded connected at '+ uristring);
 });


var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

app.use(function(req, res, next) {
    // express helper for natively supported engines
    res.locals.__ = res.__ = function() {
        return i18n.__.apply(req, arguments);
    };

    next();
});

app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
