// Esta funcion es la encargada de mostrar los mensajes de registro normales en el back-end
const info = (...params) => {
  if(process.env.NODE_ENV !== 'test'){
    console.log(...params)
  }
}

// Esta funcion es la encargada de mostrar los mensajes de error en el back-end
const error = (...params) => {
  if(process.env.NODE_ENV !== 'test'){
    console.log(...params);
  }
}

module.exports = {
  info, error
}