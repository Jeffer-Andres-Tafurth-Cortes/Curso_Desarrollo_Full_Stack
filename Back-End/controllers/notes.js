// Se define noteRouter para importar la funcion Router() de express
const noteRouter = require('express').Router()
const Note = require('../models/note')

// A partir de aqui se definen las diferentes rutas que habiamos creado antes

// Ruta GET para obtener todas las notas
noteRouter.get('/', async(request, response) => {
  const notes = await Note.find({})
    response.json(notes)
})

// Ruta GET para obtener una nota usando su ID
noteRouter.get('/:id', async (request, response) => {

  const note = await Note.findById(request.params.id)
  if(note){
    response.json(note)
  } else {
    response.status(404).end()
  }
})

// Ruta POST para crear una nueva nota
noteRouter.post('/', async (request, response) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: body.important || false
  })

  const savedNote = await note.save()
  response.status(201).json(savedNote)
})

// Ruta DELETE para eliminar una nota
noteRouter.delete('/:id', async (request, response) => {
    await Note.findByIdAndDelete(request.params.id)
    response.status(204).end()
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