const app = require('./app') // Ahora aqui va a estar la aplicacion Express completa
const config = require('./utils/config')
const logger = require('./utils/logger')

// Definimos el puerto que va a escuchar la aplicacion
app.listen(config.PORT, () => {
  logger.info(`El servidor esta funcionando en el puerto ${config.PORT}`)
})