import { useEffect, useState } from 'react';
import './App.css'
import Note from './Components/Note'
import axios from 'axios';

// Este componente muestra la logica basica de como funciona un renderizado de un Array usando el metodo
// map(), el array es traido a traves de props desde el main.jsx ' el array se llama notes '
function App() {

  const [notes, setNotes] = useState([]);  
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true);

  // Se hace uso del hook useEffect para poder usar la API del Back-End y Se usa la liberia Axios en una funcion para llamar al Endpoint del Back-End
  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promesa cumplida');
        setNotes(response.data)
    })
  }, []);
  console.log('render', notes.length, 'notas');

  // La funcion addNote agrega notas
  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes([...notes, noteObject])
    setNewNote('')
  }

  // La funcion handleNoteChange toma el valor del input
  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  // el condicional notesToShow muestra las notas de acuerdo a si son importantes o no
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <>
      <h2>Notas</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          ver {showAll ? 'notas importantes' : 'todas las notas'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Guardar</button>
      </form>
    </>
  )
}


export default App
