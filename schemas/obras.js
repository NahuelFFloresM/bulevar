  var mongoose = require('mongoose');
  const { Schema } = mongoose;

  var obraSchema = mongoose.Schema({
    id_obra: {type:Number}, // String is shorthand for {type: String}
    estaciones: {type:String},
    hora_inicio: {type:String},
    hora_fin: {type:String}
  });

  module.exports = mongoose.model('Obra', obraSchema);