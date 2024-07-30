// Incorporamos la libreria Express
const express = require('express')
const app = express()

const Note = require('./models/note')

// Agregamos una lista en formato JSON que va a procesa directamente el Back-End sin necesidad de acceder al Front-End
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.use(express.static('dist'))

const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if(error.name === 'CastError'){
    return response.status(400).send({ error: 'El formato del ID esta mal' })
  } else if(error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

const cors = require('cors')
app.use(cors())

app.use(express.json())

// Middleware
app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Endpoint desconocido' })
}

// Definimos la ruta '/' que responde con un mensaje de 'Hola Mundo' en formato HTML
app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo</h1>')
})


// Definimos la ruta '/notes' que responde con la lista de notas en formato JSON con GET
app.get('/api/notes', (request, response) => {
  Note.find({}).then(result => {
    response.json(notes)
  })
})

// Definimos la ruta '/api/notes/:id' que permite buscar una nota a traves de un parametro, en este caso del id con GET
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.param.id)
    .then(note => {
      if(note){
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// Definimos la ruta '/api/notes/:id' pero esta ruta sera para eliminar una nota usando su parametro id con DELETE
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Definimos la ruta '/api/notes/:id' para actualizar una nota con PUT
app.put('/api/notes:id', (request, response, next) => {
  const { content, important } = request.body

  Note.findByIdAndUpdate(request.params.id, { content, important }, { new: true, runValidators: true, context: 'query' })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

// Definimos la ruta '/api/notes' para agregar una nueva nota con POST
app.post('/api/notes', (request, response, next) => {

  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false
  })

  note.save()
    .then(savedNote => {
      response.json(savedNote)
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${PORT}`);
})
