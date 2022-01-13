var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var productoSchema = new mongoose.Schema({
  tipo: String,
  descripcion: String,
  propiedades: [String],
  descripcion_corta: String,
  patrocinador: String,
  categoria: String
});


module.exports = mongoose.model('Producto',productoSchema);