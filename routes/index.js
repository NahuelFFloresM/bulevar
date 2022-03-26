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
var productoSchema = require('../schemas/productos');
const Productos = productoSchema;

//---- RUTAS
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/nosotros', function(req,res,next){
  res.render('nosotros');
})

router.get('/nuestras_obras', function(req,res,next){
  res.render('obras');
});

router.get('/nuestras_obras/:id',function(req,res,next){
  Obras.findById({_id:req.params.id},function(err,items){
    if(err){
      res.render('obrainfo',{error: err , data:null});
      // res.send({error: err , data:null});
		}
    res.render('obrainfo',{error: null , data:items});
    // res.send({error: null , data:items});
  });
});

router.get('/nuestros_productos', function(req,res,next){
  res.render('productos');
});

router.get('/nuestros_productos/pvc/:id', function(req,res,next){
  // Productos.find({tipo:'pvc',categoria:req.params.id},null,{sort:{categoria:-1}},function(err,items){
  //   if(err){
  //     res.render('productoinfo',{error: err , data:null});
  //     // res.send({error: err , data:null});
	// 	}
  //   res.render('productoinfo',{error: null , data:items});
  //   // res.send({error: null , data:items});
  // });
  
  Productos.aggregate([
    { $match: {tipo:'pvc',categoria:req.params.id} },
    { $group: { _id: '$subcategoria', items:{$push:'$$ROOT'}}},
    { $sort: { _id: 1 }}
  ]).then(result => {
    console.log(result);
    res.render('productoinfo',{error: null , data:result});
  })
  .catch(error => {
    res.render('productoinfo',{error: error , data:null});
  })
  
  
})

router.get('/nuestros_productos/alu/:id', function(req,res,next){
  // Productos.find({tipo:'alu',categoria:req.params.id},function(err,items){
  //   if(err){
  //     res.render('productoinfo',{error: err , data:null});
  //     // res.send({error: err , data:null});
	// 	}
  //   res.render('productoinfo',{error: null , data:items});
  //   // res.send({error: null , data:items});
  // });
  Productos.aggregate([
    { $match: {tipo:'alu',categoria:req.params.id} },
    { $group: { _id: '$subcategoria', items:{$push:'$$ROOT'}}},
    { $sort: { _id: 1 }}
  ]).then(result => {
    res.render('productoinfo',{error: null , data:result});
  })
  .catch(error => {
    res.render('productoinfo',{error: error , data:null});
  })
})

module.exports = router;
