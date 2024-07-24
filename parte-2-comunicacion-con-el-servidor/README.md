# PARTE 2 - COMUNICACION CON EL SERVIDOR

## Renderizanco una coleccion, modulos
- console.log(): usar la consola nos permite identificar errores en nuestra aplicacion cuando estemos trabajando en ella, ademas de ello nos ayuda a depurar de mejor manera
- En Visual Studio Code podemos agregar extensiones que nos ayudan a tener snippets o podemos crear desde cero nuestros propios snippets (los snippets son un pequeño comando que da como resultado un conjunto de codigo en especifico, ejemplo esta el snippet rfce para crear una funcion en React)
- En comun en React usar matrices por ende ya que se el lenguaje principal de uso en React es JavaScript podemos usar los metodos find(), filter() y map() para renderizar dichas matrices
- Cuando usemos el metodo map() en react para renderizar algun tipo de lista o array, debemos tambien usar una key prop, para poder agregarle un id a cada item de la lista
- Recordemos que cuando se vayan a pasar props de un componente padre a un componente hijo la mejor manera de hacer es a traves de la desestructuracion

## Formularios
- Cuando estemos trabajando con algun tipo de formulario en React, casi siempre debemos de usar un useState, el elemento 'form' (dentro del form debe haber un input y un button, el tipo del button debe ser type='submit'), el elemento'form' debe tener como evento onSubmit y el evento debe de ejecutar una funcion
- La funcion ejecutada por el evento onSubmit recibe un event o simplemente 'e' y se le debe de agregar el metodo preventDefault() para evitar que cuando se ejecute se renderice toda la aplicacion completa
- Dentro del input que esta en el 'form' se debe de agregar un evento onChange el cual ejecuta una funcion que toma el valor del input; es decir, lo que toma lo que se escribe 

## Obteniendo datos del servidor
- En este punto podemos usar una herramienta llamada JSON Server para interactuar el Front-End con el Back-End
- Para usar el JSON Server de manera local se usa el comando ' npm install -g -json-server ' para instalar el servidor
- Para poder proyectar y/o ejecutar el JSON de manera local se usa el comando ' json-server --port 3001 --watch db.json '; aunque no es necesario instalar de manera global el servidor JSON podemos inicializarlo localmente usando el comado ' npx json-server --port 3001 --watch db.json '; el endpoint sera http://localhost:3001/
- Para obtener los datos del Back-End antes se usaba el metodo XMLHttpRequest, pero es mas comun y mejor usar el fetch (el tenga de fetch es que se basa en promesas), en este caso podremos usar la libreria mas conocida como Axios para hacer el fetch (para instalar Axios se usa el comando  ' npm install axios ' )
- La libreria Axios tambien devuelve una promesa la cual se resuelve con .then() (las promesas tiene 3 estados: pendiente, cumplida o rechazada)
- Aqui es donde entra el hook useEffect, que entre todas las funciones de este hook una de las mas conocida es que podemos hacer llamadas a APIs; el hook useEffect requiere de dos argumentos, el primero es la ejecucion del efecto como tal y el segundo es se renderiza una vez o despues de que alguna prop o argumento de otra parte de codigo llegue al hook

## Alterando datos en el servidor 
- Para este punto ya al crear notas en la aplicacion quedan guardadas en el Back-End, por ende se podria decir que es una manera de explicar, de como crear y de como usar una API REST 