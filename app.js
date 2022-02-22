'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engines = require('consolidate');
const mongoose = require('mongoose');
const { Schema } = mongoose;


var indexRouter = require('./routes/index.js');
var obrasRouter = require('./routes/obras.js');
var productosRouter = require('./routes/productos.js');


const { MongoClient } = require('mongodb');
require('dotenv').config()
var compression = require('compression');
var helmet = require('helmet');

// const uri = "mongodb+srv://public_aspp:lyBOhKoIOJwdrvYt@aspp.foc0r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb+srv://nahuelbule:UJnbM9mSzN6BJ4mp@cluster0.sgyqf.mongodb.net/bulevard?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.DB_MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();

app.use(helmet());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.use(compression());

// app.use(function (req, res, next) {
//   res.set('Content-Security-Policy', 'frame-src https://maps.google.com/maps/embed/');
//   next();
// });

app.use('/', indexRouter);
app.use('/obras', obrasRouter);
app.use('/productos',productosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
