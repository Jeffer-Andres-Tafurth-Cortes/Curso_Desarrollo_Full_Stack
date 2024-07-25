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

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = 3001
app.listen(PORT)
console.log(`El servidor esta corriendo en el puerto ${PORT}`);
