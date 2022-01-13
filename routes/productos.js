var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// var ObraModel = require('../schemas/obras');
var productoSchema = new mongoose.Schema({
  
});

const Productos = mongoose.model('productos', productoSchema);


//---- RUTAS

router.get('/',async function(req,res,next){
  // var new_item = new Obra(
  //   {
  //     "nombre": "Primer obra",
  //     "ubicacion": "Calle 1234",
  //     "referencia": false,
  //     "portada": "url-portada",
  //     "finalizacion": "dd/mm/aaaa",
  //     "localizacion": "Tandil-Bs.As",
  //     "productos": ["Puerta", "Ventana"],
  //     "tipo": "Vivienda",
  //     "Imagenes": ["url-1", "url-2", "url3"]
  //   }
  // );
  // new_item.save(function(err,result){
  //   if (err){
  //       console.log(err);
  //   }
  //   else{
  //       console.log(result);
  //   }
  // })
  Productos.find({},function(err,items){
    if(err){
			res.send(err);
		}
		res.send(items);
	});
});

router.get('/:id', function(req,res,next){
  res.render('productoinfo',{data:'Hello data'});
})

module.exports = router;
