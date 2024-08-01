// Importamos la libreria de testin de node
const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')

// Importamos la conexion con la base de datos
const mongoose = require('mongoose')

// Importamos supertest para testear la API
const supertest = require('supertest')

const helper = require('./test_helpers')

// Importamos la aplicacion a testear
const app = require('../app')

const api = supertest(app)

const bcrypt = require('bcrypt')

const User = require('../models/user')
const Note = require('../models/note')

describe('cuando hay inicialemente algunas notas guardadas', () => {

  beforeEach(async () => {
    await Note.deleteMany({})
    await Note.insertMany(helper.initialNotes)
  })

  // Primer prueba para verificar que retorne las notas en formato JSON
  test('Las notas son retornadas en JSON', async() => {
    await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  })
  
  // Segunda prueba para verificar que retornen todas las notas
  test('retornan todas las notas', async() => {
    const response = await api.get('/api/notes')
    
    assert.strictEqual(response.body.length, helper.initialNotes.length)
  })

  // Tercer prueba para verificar que retorna una nota especifica dentro de todas las notas
  test('Retorna una nota especifica dentro de las notas retornadas', async () => {
    const response = await api.get('/api/notes')

    const contents = response.body.map(r => r.content)
    assert(contents.includes('El navegador solo ejecuta JavaScript'))
  })

  describe('Visualizar una nota especifica', () => {

    // Cuarta prueba para verificar que la nota tenga un ID valido
    test('Exito con un ID valido', async () => {
      const notesAtStart = await helper.notesInDb()

      const noteToView = notesAtStart[0]

      const resultNote = await api
        .get(`/api/notes/${noteToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      assert.deepStrictEqual(resultNote.body, noteToView)
    })

    // Quinta prueba para verificar por si la nota tiene un ID invalido
    test('Estado de codigo 404 fallo si una nota no existe', async () => {
      const validNonexistingId = await helper.nonExistingId()

      await api
        .get(`/api/notes/${validNonexistingId}`)
        .expect(404)
    })

    // Sexta prueba para verificar que la peticion falla con un codigo de estado 400 si el ID es invalido
    test('Fallo con un codigo de estado 400 como invalido', async () => {
      const invalidId = '5a3d5da59070081a82a3445'

      await api
       .get(`/api/notes/${invalidId}`)
       .expect(400)
    })
  })

  describe('Agregar una nueva nota', () => {

    // Septima prueba para verificar si la informacion de la nota es correcta
    test('validacion de informacion exitosa',  async () => {
      const newNote = {
        content: 'async/await como llamadas asincronas simplificadas',
        important: true
      }

      await api
        .post('/api/notes')
        .send(newNote)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const notesAtEnd = await helper.notesInDb()
      assert.strictEqual(notesAtEnd.length, helper.initialNotes.length + 1)

      const contents = notesAtEnd.map(n => n.content)
      assert(contents.includes('async/await como llamadas asincronas simplificadas'))
    })

    // Octava prueba para verificar que la peticion falla con el codigo de estado 400 si la informacion es invalida
    test('fallo con el codigo de estado 400 si la informacion es invalida', async () => {
      const newNote = {
        important: true
      }

      await api
        .post('/api/notes')
        .send(newNote)
        .expect(400)

      const notesAtEnd = await helper.notesInDb()
      assert.strictEqual(notesAtEnd.length, helper.initialNotes.length)
    })
  })

  describe('Eliminacion de notas', () => {

    // Novena prueba para verificar que el ID de la nota a eliminar es correcto (existe)
    test('Codigo de estado 204 de exito si el ID es valido', async () => {
      const notesAtStart = await helper.notesInDb()
      const notesToDelete = notesAtStart[0]

      await api
       .delete(`/api/notes/${notesToDelete.id}`)
       .expect(204)

       const notesAtEnd = await helper.notesInDb()
       assert.strictEqual(notesAtEnd.length, helper.initialNotes.length - 1)

       const contents = notesAtEnd.map(r => r.content)
       assert(!contents.includes(notesToDelete.content))
    })
  })
})

describe('Cuando hay un usuaio inicialmente en la base de datos', () => {
  beforeEach(async () => {
    await User.deleterMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('Creacion exitosa de un usuario', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen'
    }

    await api
      .post ('/api/notes')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    assert(usernames.includes(newUser.username))
  })

  test('La creacion de usuario falla si el usuario ya existe', async () => {
    const userAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    assert(result.body.error.includes('Se espera un nombre de usuario unico'))

    assert.strictEqual(usersAtEnd.length, userAtStart.length)
  })
})

after(async() => {
  await mongoose.connection.close()
})
