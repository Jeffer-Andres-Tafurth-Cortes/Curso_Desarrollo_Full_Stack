// Importamos la condiguracion de dotenv para poder definir las variables de entorno, en este caso
// son el puerto y la direccion de la base de datos
require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  PORT, MONGODB_URI,
}