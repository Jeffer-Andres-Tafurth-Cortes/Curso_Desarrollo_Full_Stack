// Se define noteRouter para importar la funcion Router() de express
const noteRouter = require('express').Router()
const Note = require('../models/note')

// A partir de aqui se definen las diferentes rutas que habiamos creado antes

// Ruta GET para obtener todas las notas
noteRouter.get('/',  (request, respose) => {
  Note.find({}).then(notes => {
    respose.json(notes)
  })
})

// Ruta GET para obtener una nota usando su ID
noteRouter.get('/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if(note){
        response.json(note)
      } else {
        response.status(404).end()
      }
    }) 
    .catch(error => next(error))
})

// Ruta POST para crear una nueva nota
noteRouter.post('/', (request, response, next) => {
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

// Ruta DELETE para eliminar una nota
noteRouter.delete('/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Ruta PUT para actualizar una nota existente
noteRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

// Exportamos el router para usarlo en el index.js
module.exports = noteRouter