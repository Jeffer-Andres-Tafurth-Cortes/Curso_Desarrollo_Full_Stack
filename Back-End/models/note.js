// Importamos Mongoose para poder conectar el backend con MongoDB
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

// Conectamos con MongoDB a través de la URL proporcionada
const url = process.env.MONGO_URI

console.log('conectando a', url)

mongoose.connect(url)
  .then(result => {
    console.log('Conectado a MongoDB');
  })
  .catch(error => {
    console.log('error al conectarse con MongoDB: ', error.message);
  })

// Definimos el esquema para las notas en MongoDB
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true
  },
  important: Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString()
    delete returnObject._id
    delete returnObject._v
  }
})

module.exports = mongoose.model('Note', noteSchema)