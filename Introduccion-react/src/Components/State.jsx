import { useState } from "react";

// Este es un componente el cual muestra de manera sencilla la logica de lo que es un useState hook
function State() {

  const [count, setCount] = useState(0);

  // Se hace uso de la funcion setTimeOut para poder que el estado del contador cambie cada segundo
  setTimeout(() => {
    setCount(count + 1);
  }, 1000)
  console.log('rendering...')

  return (
    <>
      <h1>Contador usando hook useState</h1>
      <div>{count}</div>
    </>
  )
}

export default State