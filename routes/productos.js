var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// var ObraModel = require('../schemas/obras');
var productoSchema = require('../schemas/productos');

const Productos = productoSchema;


//---- RUTAS
// Obtener los productos para mostrado general de todas de ellos
router.get('/',async function(req,res,next){
  Productos.find({},'_id ubicacion nombre portada tipo',function(err,items){
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
