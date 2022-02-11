var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// mongoatlas user: public_aspp 
// mongoatlas pass: lyBOhKoIOJwdrvYt

var obraSchema = require('../schemas/obras');
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

const Obras = obraSchema;


//---- RUTAS

router.get('/',async function(req,res,next){
  Obras.find({},function(err,items){
    if(err){
      res.send(err);
		}
    res.send(items);
	});
});

router.get('/:id',async function(req,res,next){
  Obras.find({id:req.params.id},function(err,items){
    if(err){
      res.send({error: err , data:null});
		}
    res.send({error: null , data:items});
  });
});

module.exports = router;

// CREACION DE ITEMS Obra
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