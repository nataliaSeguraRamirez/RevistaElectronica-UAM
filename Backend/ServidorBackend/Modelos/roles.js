const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolesSchema = new Schema({
  id: Number,
  nombre: String
})
module.exports = mongoose.model('roles', rolesSchema) // para guardar en la coleccion
