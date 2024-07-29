// Usamos el metodo require() de CommonJS para importar http como inicio de link para mostrar el Back-End de manera local
const http = require('http')

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

// Creamos un servidor usando createServer() este servidor recibe dos parametro: request y response
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json '})

  // Como se recibe un objeto en valor de JavaScript, necesitamos convertirlo a cadena de texto JSON para eso sirve el metodo JSON.stringify()
  response.end(JSON.stringify(notes))
})

// Establecemos el puerto en el que el servidor va a escuchar
const PORT = 3001
app.listen(PORT)
console.log(`El servidor esta corriendo en el puerto ${PORT}`);