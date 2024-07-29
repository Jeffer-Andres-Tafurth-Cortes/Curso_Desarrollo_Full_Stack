// Incorporamos la libreria Express
const express = require('express')
const app = express()

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


// Definimos la ruta '/notes' que responde con la lista de notas en formato JSON
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// Definimos la ruta '/api/notes/:id' que permite buscar una nota a traves de un parametro, en este caso del id
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  // Se hace una verificacion si la nota existe o no
  if (note) {
    response.json(note) 
  } else {
    response.status(404).end()
  }
})

// Definimos la ruta '/api/notes/:id' pero esta ruta sera para eliminar una nota usando su parametro id
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

// La funcion generateId sera la encargada de asignar un Id cuandose crea una nota con el metodo POST
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1 
}
 

// Definimos la ruta '/api/notes' para agregar una nueva nota
app.post('/api/notes', (request, response) => {

  const body = request.body

  // Validamos que el body contenga el contenido de la nota
  if (!body) {
    return response.status(404).json({
      error: 'La nota no tiene ningun tipo de contenido',
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId()
  }

  notes = notes.concat(note)

  response.json(note)
})

app.use(unknownEndpoint)

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${PORT}`);
})
