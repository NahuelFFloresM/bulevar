var express = require('express');
const mongoose = require('mongoose');
// var Mustache = require('mustache');
const { Schema } = mongoose;

var router = express.Router();

// mongoatlas user: public_aspp 
// mongoatlas pass: lyBOhKoIOJwdrvYt


/* GET home page. */
// MONGO DB CONNECTION

const db = mongoose.connection;

var obraSchema = require('../schemas/obras');
const Obras = obraSchema;

//---- RUTAS
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/nosotros', function(req,res,next){
  res.render('nosotros');
})

router.get('/nuestras_obras', function(req,res,next){
  res.render('obras');
})

router.get('/nuestros_productos', function(req,res,next){
  res.render('productos');
})

module.exports = router;
