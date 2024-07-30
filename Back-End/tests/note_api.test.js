// Importamos la libreria de testin de node
const { test, after, beforeEach } = require('node:test')

// Importamos la conexion con la base de datos
const mongoose = require('mongoose')

// Importamos supertest para testear la API
const supertest = require('supertest')

// Importamos la aplicacion a testear
const app = require('../app')

const api = supertest(app)

const Note = require('../models/note')

const initialNotes = [
  {
    content: 'HTML es facil',
    importan: false
  },
  {
    content: 'El navegador solo ejecuta JavaScript',
    importan: true
  }
]

beforeEach(async () => {
  await Note.deleteMany({})
  let noteObject = new Note(initialNotes[0])
  await noteObject.save()
  noteObject = new Note(initialNotes[1])
  await noteObject.save()
})

test('Las notas son retornadas en JSON', async() => {
  await api
   .get('/api/notes')
   .expect(200)
   .expect('Content-Type', /application\/json/)
})

test('hay dos notas', async() => {
  const response = await api.get('/api/notes')

  assert().strictEqual(response.body.length, initialNotes.length)
})

test('La primer notaes sobre los metodos HTTP', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map(e => e.content)
  assert(contents.includes('HTML es facil'), true)
})

after(async() => {
  await mongoose.connection.close()
})
