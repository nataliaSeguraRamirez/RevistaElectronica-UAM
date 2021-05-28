const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosSchema = new Schema({
  cedula: String,
  nombre: String,
  apellido: String,
  correo: String,
  clave: String,
  rol_id: Number,
})
module.exports = mongoose.model('usuarios', usuariosSchema) // para guardar en la coleccion
