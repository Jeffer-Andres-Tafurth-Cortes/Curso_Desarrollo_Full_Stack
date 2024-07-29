import { useState } from "react";

// Este componente renderiza un ejemplo simple de lo que es un controlador de eventos, en este caso es el conocido
// evento onClick
function ClickState() {

  const [countClicks, setcountClicks] = useState(0);

  const handleClickPlus = () => {
    setcountClicks(countClicks + 1)
  }

  const handleClickMinus = () => {
    if (countClicks > 0) {
      setcountClicks(countClicks - 1)
    } else {
      alert("No puedes restar mas veces")
    }
  }

  const handleResetCount = () => {
    setcountClicks(0)
  }

  return (
    <>
      <Button onClick={handleClickPlus} text='Aumentar cuenta' />
      <Button onClick={handleClickMinus} text='Disminuir cuenta' />
      <Button onClick={handleResetCount} text='Reiniciar cuenta' />
      <Display countClicks={countClicks} />
    </>
  )
}

// Componente Button reutilizable dentro del ClickState
function Button({ onClick , text}){
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

// Componente Display reutilizable dentro de ClickState
function Display({ countClicks }){
  return (
    <>
      <p>Has hecho click {countClicks} veces</p>
    </>
  )
}

export default ClickState