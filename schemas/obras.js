  var mongoose = require('mongoose');
  const { Schema } = mongoose;

  var obraSchema = mongoose.Schema({
    nombre: {type:String},
    ubicacion: {type:String},
    referencia: {type:Boolean},
    portada: {type:String},
    finalizacion: {type:String},
    localizacion: {type:String},
    productos: [{type:String}],
    tipo: {type:String},
    Imagenes: [{type:String}]
  });

  module.exports = mongoose.model('Obra', obraSchema);