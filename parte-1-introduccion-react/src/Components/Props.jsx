// Este es un componente que muestra de manea sencilla como se implementan los Props en React
function Props() {

  const name = 'Jeffer'
  const age = 21

  return (
    <>
      <GetYear name={name} age={age} />
    </>
  )
}

function GetYear({ name, age }){

  const bornYear = () => {
    const currentYear = new Date().getFullYear()
    return currentYear - age
  }

  return(
    <>
      <h2>Hola {name}. Tengo {age} años</h2>
      <h3>Probablemente nacistes en el {bornYear()}</h3>
    </>
  )
}

function Prop({ name, age }){
  return (
    <>
      <h2>Saludos!</h2>
      <h2>Hola {name}. Tengo {age} años</h2>
    </>
  )
}

export default Props