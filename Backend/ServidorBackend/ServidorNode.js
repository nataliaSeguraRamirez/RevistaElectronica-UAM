const App = require('./Configuraciones')
const usuarios = require('./Modelos/usuarios')
const articulos = require('./Modelos/articulos')
const roles = require('./Modelos/roles')

App.post('/logIn', async (req, res, next) => {
  console.log('correo: ' + req.body.correo + ' contraseña: ' + req.body.clave)
  const usuario = await usuarios.find({
    $and: [{ correo: req.body.correo }, { clave: req.body.clave }],
  })
  console.log(usuario)
  res.json(usuario)
})
