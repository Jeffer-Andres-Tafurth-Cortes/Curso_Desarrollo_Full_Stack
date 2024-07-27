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
app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo</h1>')
})

app.get('/notes', (request, response) => {
  response.json(notes)
})


// Establecemos el puerto en el que el servidor va a escuchar
const PORT = 3001
app.listen(PORT, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${PORT}`);
})