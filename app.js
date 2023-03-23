'use strict';

var createError = require('http-errors');
// var crypto = require("crypto");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var lingua  = require('lingua');
const cors = require('cors');
var engines = require('consolidate');
const mongoose = require('mongoose');
// const { Schema } = mongoose;


var indexRouter = require('./routes/index.js');
var obrasRouter = require('./routes/obras.js');
var productosRouter = require('./routes/productos.js');


// const { MongoClient } = require('mongodb');
require('dotenv').config()
var compression = require('compression');
var helmet = require('helmet');

// const uri = "mongodb+srv://public_aspp:lyBOhKoIOJwdrvYt@aspp.foc0r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect('mongodb+srv://nahuelbule:UJnbM9mSzN6BJ4mp@cluster0.sgyqf.mongodb.net/bulevard?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.DB_MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('strictQuery', false);

var app = express();


app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.use(compression());

app.use(lingua(app, {
  defaultLocale: 'es',
  path: __dirname + '/i18n',
  cookieOptions: {
    httpOnly: true,          // if you need access to this cookie from javascript on the client
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  // expire in 1 day instead of 1 year
    //secure: true              // for serving over https
}
}));

// const nonce = crypto.randomBytes(16).toString('hex');
app.use(helmet(
  {
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:","ebaproyect.s3.sa-east-1.amazonaws.com"],
        "script-src": ["'self'"],
      },
    },
  }
));

var whitelist = ['https://eba-proyect.onrender.com/*','https://ebaproyect.s3.sa-east-1.amazonaws.com/*']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// cf24ef80af08a52500a7a4eb189957883a8453b45e166d8faf808e0451c5510c
app.use(cors(corsOptions));


app.use('/', indexRouter);
app.use('/obras', obrasRouter);
app.use('/productos',productosRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
//   // throw new Error('Page not Found');
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error',{error: err});
});


module.exports = app;
