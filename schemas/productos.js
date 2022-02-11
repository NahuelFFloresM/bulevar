  var mongoose = require('mongoose');
  const { Schema } = mongoose;

  var productoSchema = mongoose.Schema({
    tipo: {type:String},
    descripcion: {type:String},
    propiedades: [{type:String}],
    categoria: {type:String},
    patrocinador: {type:String},
    descripcion_corta: {type:String}
  });

  module.exports = mongoose.model('Producto', productoSchema);