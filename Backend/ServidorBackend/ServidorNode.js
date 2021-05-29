const App = require('./Configuraciones')
const usuarios = require('./Modelos/usuarios')
const articulos = require('./Modelos/articulos')
const roles = require('./Modelos/roles')
const ObjectID = require('mongodb').ObjectID

App.post('/logIn', async (req, res, next) => {
  //console.log('correo: ' + req.body.correo + ' contraseña: ' + req.body.clave)
  const usuario = await usuarios.find({
    $and: [{ correo: req.body.correo }, { clave: req.body.clave }],
  })
  //console.log(usuario)
  res.json(usuario)
})

App.get('/obtenerArticulosTotal', async (req, res, next) => {
  const articulos1 = await articulos.find()
  res.json(articulos1)
})

App.get('/obtenerArticulosAutor/:cedula', async (req, res, next) => {
  const articulos1 = await articulos.find({ autor_ced: req.params.cedula })
  res.json(articulos1)
})

App.get('/obtenerArticulosPublicados', async (req, res, next) => {
  const articulos1 = await articulos.find({ es_publicado: 1 })
  res.json(articulos1)
})

App.get('/obtenerAutores', async (req, res, next) => {
  const autores1 = await usuarios.find({ rol_id: 2 })
  res.json(autores1)
})

App.post('/evaluarArticulo', async (req, res, next) => {
  console.log(req.body)
  //console.log(ObjectID(req.body._id))
  //{ _id: ObjectID(req.body._id) },
  await articulos.updateOne(
    { titulo: req.body._id },
    {
      $set: {
        es_publicado: req.body.es_publicado,
        es_evaluado: req.body.es_evaluado,
      },
    },
  )
})

App.post('/registrarAutor', async (req, res, next) => {
  console.log(req.body)
  const objdocumento = new usuarios(req.body)
  objdocumento.save()
  res.json('true')
})

App.post('/crearArticulo', async (req, res, next) => {
  console.log(req.body)
  const objdocumento = new articulos(req.body)
  await objdocumento.save()
  res.json('true')
})
