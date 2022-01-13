var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// mongoatlas user: public_aspp 
// mongoatlas pass: lyBOhKoIOJwdrvYt


/* GET home page. */
// MONGO DB CONNECTION

const db = mongoose.connection;

// var ObraModel = require('../schemas/obras');
// var obraSchema = new mongoose.Schema({
//   nombre: String,
//   ubicacion: String,
//   referencia: Boolean,
//   portada: String,
//   finalizacion: String,
//   localizacion: String,
//   productos: [String],
//   tipo: String,
//   Imagenes: [String],
// });

// const Obra = db.model('obra', obraSchema);


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
