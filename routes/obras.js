var express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

var router = express.Router();

// mongoatlas user: public_aspp 
// mongoatlas pass: lyBOhKoIOJwdrvYt


/* GET home page. */
// MONGO DB CONNECTION

// const db = mongoose.connection;

// var ObraModel = require('../schemas/obras');
var obraSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String,
  referencia: Boolean,
  portada: String,
  finalizacion: String,
  localizacion: String,
  productos: [String],
  tipo: String,
  Imagenes: [String],
});

const Obras = mongoose.model('obras', obraSchema);


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
      res.render('obrainfo',{error: err , data:null});
		}
    res.render('obrainfo',{error: null , data:items});
  });
});

module.exports = router;
