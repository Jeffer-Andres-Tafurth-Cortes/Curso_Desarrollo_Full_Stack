// Importamos Mongoose
const mongoose = require('mongoose')

// Se define que el total de variables de entorno no sera mayor a 3
if(process.env.length<3){
  console.log('digita la constraseña como argumento')
  process.exit(1)
}

// La contraseña sera la variable de entorno en el lugar 2
const password = process.env[2]

// Conectamos con MongoDB
const url = `mongodb+srv://fullstackopen:${password}@fullstackopen.nexlcsi.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note =  new Note({
  content: 'HTML es facil',
  important: true,
})

note.save().then(result => {
  console.log('La nota se ha guardado');
  mongoose.connect.close()
})