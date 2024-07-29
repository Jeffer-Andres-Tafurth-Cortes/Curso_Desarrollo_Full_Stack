// Este componente es un componente independiente y se utiliza en la lista anterior
function Note({ note, toogleImportance }){

  const label = note.important ? 'No convertir nota en importante' : 'Convertir nota en importante'

  return(
    <>
      <li className="note">
        {note.content}
        <button onClick={toogleImportance}>{label}</button>
      </li>
    </>
  )
}

export default Note