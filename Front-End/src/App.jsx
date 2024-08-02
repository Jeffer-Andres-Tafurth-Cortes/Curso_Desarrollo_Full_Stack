import { useEffect, useState } from 'react';
import './App.css'
import Note from './Components/Note'
import noteService from './services/notes'
import Notification from './Components/Notification';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm';

// Este componente muestra la logica basica de como funciona un renderizado de un Array usando el metodo
// map(), el array es traido a traves de props desde el main.jsx ' el array se llama notes '
function App() {

  const [notes, setNotes] = useState([]);  
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('Ocurrio algun error')

  // Se agregan dos useState() para el tema del formulario de login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [loginVisible, setLoginVisible] = useState(false)

  // Se hace uso del hook useEffect para poder usar la API del Back-End y Se usa la liberia Axios en una funcion para llamar al Endpoint del Back-End
  useEffect(() => {
    noteService
      .getAll()
      .then(initialState => {
        setNotes(initialState)
    })
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password
      })

      localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      noteService(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Credenciales incorrectas')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  } 

  // La funcion addNote agrega notas
  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteService
     .create(noteObject)
     .then(returnedNote => {
      setNewNote(notes.concat(returnedNote))
      setNewNote('')
     })
  }
  
  const toogleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
    
    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch((error) => {
      setErrorMessage(error, `La nota ${note.content} ya fue eliminada del servidor`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  // La funcion handleNoteChange toma el valor del input
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  // el condicional notesToShow muestra las notas de acuerdo a si son importantes o no
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showwhenVisible = { display: loginVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>Iniciar Sesion</button>
        </div>
        <div style={showwhenVisible}>
          <LoginForm 
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>Cancelar</button>
        </div>
      </div>
    )
  }

  const noteForm = () => {
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange}/>
      <button type='submit'>Agregar Nota</button>
    </form>
  }



  return (
    <>
      <h2>Notas</h2>
      <Notification message={errorMessage}/>

      {
        user === null 
        ? loginForm() 
        : <div>
            <p>{user.name} accedió</p>
            {noteForm()}
          </div>
      }

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          ver {showAll ? 'notas importantes' : 'todas las notas'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note} toogleImportance={() => toogleImportanceOf(note.id)}/>
        )}
      </ul>

      <Footer />
    </>
  )
}

export default App
