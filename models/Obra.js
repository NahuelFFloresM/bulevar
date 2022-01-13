var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var obraSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: String,
  referencia: Boolean,
  portada: String,
  finalizacion: String,
  localizacion: String,
  productos: [String],
  tipo: String,
  Imagenes: [{
    url_imagen: String
	}],
});


module.exports = mongoose.model('Obra',obraSchema);