const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articulosSchema = new Schema({
  _id: String,
  titulo: String,
  descripcion: String,
  contenido: String,
  es_publicado: Number,
  es_evaluado: Number,
  autor_ced: String,
})
module.exports = mongoose.model('articulos', articulosSchema) // para guardar en la coleccion
