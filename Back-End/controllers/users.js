// Este archivo contiene la ruta para los usuarios en la aplicacion
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

// Ruta POST para crear un nuevo usuario en la aplicacion
usersRouter.post('/', async (request, response) => {{
  const { username, name, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
}})

// Ruta GET para obtener todos los usuarios en la aplicacion
usersRouter.get('/', async (request, response) => {{
  const users = await User.find({}).populate('notes', {content: 1, important: 1})
  response.json(users)
}})

module.exports = usersRouter