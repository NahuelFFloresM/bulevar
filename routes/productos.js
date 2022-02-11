var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// var ObraModel = require('../schemas/obras');
var productoSchema = require('../schemas/productos');

const Productos = productoSchema;


//---- RUTAS

router.get('/',async function(req,res,next){
  Productos.find({},function(err,items){
    if(err){
			res.send(err);
		}
		res.send(items);
	});
});

router.get('/:id',async function(req,res,next){
  Productos.find({id:req.params.id},function(err,items){
    if(err){
      res.render('productoinfo',{error: err , data:null});
		}
    res.render('productoinfo',{error: null , data:items});
  });
});

module.exports = router;
