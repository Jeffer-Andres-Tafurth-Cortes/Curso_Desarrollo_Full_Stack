// Importamos Mongoose para poder conectar el backend con MongoDB
const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('Tienes que usar una contraseña como argumento')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstackopen:${password}@fullstackopen.nexlcsi.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML es facil',
  important: true
})

note.save().then(result => {
  console.log('nota guardada!')
  mongoose.connection.close()
})