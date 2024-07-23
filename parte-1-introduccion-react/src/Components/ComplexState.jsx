import { useState } from "react";

// Este es un componente que tiene la logica usando varios estados independientes (useState)
function ComplexState() {

  // Estado para click izquierdo y derecho
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  // Estado para click, derivnaod un array de las palabras 'left' y 'right'
  const [allClicks, setAllClicks] = useState([])

  // Estado para total de clicks (izquierdo + derecho)
  const [totalClicks, setTotalClicks] = useState(0)

  // Funcion para manejar el click izquierdo
  const handleClickLeft = () => {
    const newClick = {
      ...clicks,
      left: clicks.left + 1,
    }
    setClicks(newClick);
    setAllClicks(allClicks.concat('left'))
    setTotalClicks(newClick.left + newClick.right)
  }

  // Funcion para manejar el click derecho
  const handleClickRight = () => {
    const newClick = {
      ...clicks,
      right: clicks.right + 1,
    }
    setClicks(newClick);
    setAllClicks(allClicks.concat('right'))
    setTotalClicks(newClick.left + newClick.right)
  }

  return (
    <>
      <Button onClick={handleClickLeft} text='left' />
      <Button onClick={handleClickRight} text='right' />
      <p>Clicks: {clicks.left} - {clicks.right}</p>
      <p>{allClicks.join(' ')}</p>
      <h3>Total de clicks realizados {totalClicks}</h3>

      <History allClicks={allClicks} />

    </>
  )
}

// Este es un componente que muestra el historial de clicks
function History({ allClicks }){

  if(allClicks.lenght === 0){
    return(
      <h3>Los botones de la aplicacion estan siendo utilizados</h3>
    )
  }

  return(
    <>
      <h2>{allClicks.join(' ')}</h2>
    </>
  )
}

function Button({ onClick, text }){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

export default ComplexState