// Se define noteRouter para importar la funcion Router() de express
const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/note')

const jwt = require('jsonwebtoken')

// A partir de aqui se definen las diferentes rutas que habiamos creado antes

// Ruta GET para obtener todas las notas
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({}).populate('user', {username: 1, name: 1})
    response.json(notes)
})

// Ruta PUT para actualizar una nota existente
notesRouter.put('/:id', async (request, response) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important
  }

  const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, { new: true })
    response.json(updatedNote)
})

// Agregamos la funcionalidad con respecto al TOKEN
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if(authorization && authorization.startsWith('Bearer ')){
    return authorization.replace('Bearer ', '')
  }
  return null
}

// Ruta POST para crear una nueva nota
notesRouter.post('/', async (request, response) => {
  const body = request.body
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)

  if(!decodedToken.id){
    return response.status(401).json({ error: 'Token Invalid '})
  }

  const user = await User.findById(decodedToken.id)

  const note = new Note({
    content: body.content,
    important: body.important || false,
    user: user.id
  })

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  response.status(201).json(savedNote)
})

// Ruta GET para obtener una nota usando su ID
notesRouter.get('/:id', async (request, response) => {

  const note = await Note.findById(request.params.id)
  if(note){
    response.json(note)
  } else {
    response.status(404).end()
  }
})

// Ruta DELETE para eliminar una nota
notesRouter.delete('/:id', async (request, response) => {
    await Note.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

// Exportamos el router para usarlo en el index.js
module.exports = notesRouter