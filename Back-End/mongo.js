const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('Escribe una contraseña como argumento')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://full_stack_open:${password}@fullstackopen.nexlcsi.mongodb.net/noteApp?retryWrites=true&w=majority&appName=fullstackopen`

mongoose.set('strictQuery', false)
mongoose.connect(url).then(() => {
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })

  const Note = mongoose.model('Note', noteSchema)

  Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
})