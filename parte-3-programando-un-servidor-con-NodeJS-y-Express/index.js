// Incorporamos la libreria Express
const express = require('express')
const app = express()

// Agregamos una lista en formato JSON que va a procesa directamente el Back-End sin necesidad de acceder al Front-End
let notes = [
  {
    id: 1,
    content: 'HTML es facil',
    important: true
  },
  {
    id: 2,
    content: 'El navegador solo ejecuta JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET y POST son los metodos de protocolos HTTP mas comunes',
    important: true
  }
]

app.use(express.static('dist'))

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const cors = require('cors')
app.use(cors())

// Middlewares que se ejecutan antes de cada request
app.use(express.json())
app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// Ya teniendo incorporado Express podemos definir cada ruta como un tipo de protoco HTTPS ya esto es de acuerdo a lo 
// que queremos hacer o vayamas haciendo

// La primer ruta es un GET que devuelve un titulo
app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo!</h1>')
})

// La segunda ruta es un GET que devuelve la notas del array 'notes'
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// La tercera ruta es un GET y devuelve una sola nota del array 'notes' esto es debido a que estamos usando parametros
// en este caso los dos punto ( : ) para que el parametro sea el id
app.get('/api/notes/:id', (request, response) => {

  // Como el parametro a usar es el id tenemos que definirlo con request
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  note ? response.json(note) : response.status(404).end()
})

// La cuarta ruta corresponde a un DELETE, en este caso debe de tomar el id de un recurso para poder eliminer
// exactamente ese recurso en concreto
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.filter(note => note.id !== id)
  response.status(204).end()
})

// La quinta ruta corresponde a un POST, en este caso debe de recibir una nueva nota y añadirla al array

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0

  return maxId + 1;
} 

app.post('/api/notes', (request, response) => {
  const body = request.body

  if(!body.content) {
    return response.status(400).json({ error: 'No hay contenido en esta nota' })
  }

  const note = {
    id: generateId(),
    content: body.content,
    important: Boolean(body.important) || false
  }

  note = notes.concat(note)
  response.json(note)
})


app.use(unknownEndpoint)

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`El servidor esta corriendo en el puerto ${PORT}`);
