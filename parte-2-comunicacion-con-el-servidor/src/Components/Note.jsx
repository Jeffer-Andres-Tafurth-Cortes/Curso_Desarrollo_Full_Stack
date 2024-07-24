// Este componente es un componente independiente y se utiliza en la lista anterior
function Note({ note }){
  return(
    <>
      <li>{note.content}</li>
    </>
  )
}

export default Note