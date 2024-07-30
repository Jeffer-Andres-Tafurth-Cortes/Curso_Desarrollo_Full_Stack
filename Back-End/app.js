// Importamos las varibales de entorno
const config = require('./utils/config')

// Importamos Express
const express = require('express')
const app = express()

// Importamos CORS
const cors = require('cors')

// Importamos el controlador de las notas (rutas)
const notesRoutes = require('./controllers/notes')

// Importamos el middleware
const middleware = require('./utils/middleware')

// Importamos el logger
const logger = require('./utils/logger')

// Importamos mongoose
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('Conectado a ', config.MONGO_URI)

mongoose.connect(config.MONGO_URI)
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

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app