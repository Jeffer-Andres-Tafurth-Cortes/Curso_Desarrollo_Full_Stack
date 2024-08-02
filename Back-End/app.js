// Importamos las varibales de entorno
const config = require('./utils/config')

// Importamos Express
const express = require('express')
require('express-async-errors')
const app = express()

// Importamos CORS
const cors = require('cors')

// Importamos el controlador de las notas (rutas)
const notesRoutes = require('./controllers/notes')

// Importamos el router de usuarios
const usersRouter = require('./controllers/users')

// Importamos el router del login
const loginRouter = require('./controllers/login')

// Importamos el middleware
const middleware = require('./utils/middleware')

// Importamos el logger
const logger = require('./utils/logger')

// Importamos mongoose
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('Conectado a ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Conectado a MongoDB')
  })
  .catch(() => {
    logger.error('No se pudo conectar a MongoDB')
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

// Usamos la API correspondiente a las notas en funcion de la Rutas
app.use('/api/notes', notesRoutes)

app.use('/api/users', usersRouter)

app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app