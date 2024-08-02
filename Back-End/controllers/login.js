// Importamos el jsonwebtoken
const jwt = require('jsonwebtoken')

// Importamos bcrypt
const bcrypt = require('bcrypt')

// Importamos de express la funcion Router()
const loginRouter = require('express').Router()

// Importamos el modelo de usuario
const User = require('../models/user')

// Definimos la ruta POST para el usuario
loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if(!(user && passwordCorrect)){
    return response.status(401).json({ error: 'Invalid username or password' })
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET, {expiresIn: 60*60})

  response
   .status(200)
   .send({ token, username: user.username, name: user.nombre })
})

module.exports = loginRouter