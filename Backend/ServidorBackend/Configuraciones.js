var express = require('express')
var app = express()
var port = process.env.PORT || 1337
var bodyParser = require('body-parser')
const mongoose = require('mongoose') // para la base de datos

mongoose.Promise = global.Promise

/* Configuración del analizador del cuerpo (request) y parámetros (response) */
app.use(bodyParser.json()) // Body parser use JSON data
app.use(bodyParser.urlencoded({ extended: false }))

//CORS
function perimitirCrossDomain(req, res, next) {
  //en vez de * se puede definir SÓLO los orígenes que permitimos
  res.header('Access-Control-Allow-Origin', '*')
  //metodos http permitidos para CORS
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}
app.use(perimitirCrossDomain)

app.listen(port)
console.log('Servidor escuchando por puerto:' + port)

// Conexion a la base de datos con promesas

mongoose
  .connect('mongodb://127.0.0.1:27017/revistaUAM_bd', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Exito Conexion a la base de datos revistaUAM_bd!!yumm ')
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })
///////////////////
module.exports = app
