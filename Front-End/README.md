# PARTE 2 - COMUNICACION CON EL SERVIDOR

## Renderizando una coleccion, modulos
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
- Para este punto ya al crear notas en la aplicacion quedan guardadas en el Back-End, por ende se podria decir que es una manera de explicar, de como crear y de como usar una API REST (el termino REST hace alusion a objetos de datos individuales)
- Cuando se trabajan con APIs debemos de usar las peticiones HTTP, por ejemplo la mas comun es la peticion GET; es decir, obtener datos de la API ya sea un dato en especifico o todos los datos. Tambien esta la peticion POST la cual permite crear un nuevo recurso para almacenarlo (Hay que tener en cuenta que los datos se suben en formato JSON)
- Dentro de los metodos HTTP tambien esta PUT(con PUT podemos reemplazar por completo la informacion) y PATCH(con PATCH podemos cambiamos alguna propiedad de la informacion)
- Es importante dedicarle un tiempo prudente a comprender las promesas ya que siempre que vamos a hacer peticiones HTTP vamos a usar promesas, ya sea que usemos la libreria Axios o directamente el metodo fetch de JavaScript
- Fuera de responder las promesas usando .then(), podemos agregar un catch() para atrapar el error y retornar ese error

## Agregar estilos a la aplicacion React
- La opcion principal que se tiene para darle estilos a una aplicacion en React es usar CSS; cuando creamos una aplicacion podemos ver que se tienen dos archivos uno llamado 'index.css' y otro llamado 'App.css', podemos cambiar el estilo predeterminado que trae la aplicacion en esos archivos; pero tambien si ya manejamos aplicacion mas grandes con diferentes vistas, componente, modulos, etc, podemos agregar un estilo a cada vista, cada componente, cada modulo, etc.
- Como regla principal CSS de componen de selectores y declaraciones, en donde el selector define a que elemento se va a estilo y la declaracion sera la propiedad que se le dara

---

# PARTE 3 - PROGRAMANDO UN SERVIDOR CON NODEJS Y EXPRESS

## Frontend production build / Sirviendo archivos estáticos desde el backend
- Para este punto ya tenemos el back-end y el front-end; es hora de mandarlo a produccion, para esto ya que estamos usando React y Vite tenemos un comando en especifico para ello, el cual es: 'npm run build'; este comando crea una carpeta con el nombre de 'dist'
- Para servir la carpeta 'dist' en el back-end debemos de copiarla, desde la raiz del front-end usamos el comando 'copy -r dist ../backend' para copiarla en la raiz del back-end

---

# PARTE 5 - PROBANDO APLICACIONES REACT

## Iniciar sesion en la Interfaz
- En esta parte volvemos al Front End para hacer las respectivas implementaciones
- Se implementa el formulario Login de inicio de sesion, pero usando un operador ternario se valida que si el usuario ha iniciado sesion pues se mostraran las notas; si el usuario no ha iniciado sesion pues se renderizara el respectivo formulario para que el usuario inicie sesion
- Cuando se refresca la pagina la sesion activa del usuario desaparece; por ende, necesitamos que a pesar de esto la sesion del usuario siga activa; aqui es donde entra el local-storage (almacenamiento local), para poder aplicar esto se necesita del metodo setItem() y para obtener el valor se usa del metodo getItem(), mientras que removeItem() elimina el valor

## Props.children y proptypes
- Los props son cuando se pasa informacion de manera desestructurada de un componente padre a un componente hijo
- Las variables de los props se pueden pasar de manera desestructurada

## Pruebas de extremo a extremo: Playwright

## Pruebas de extremo a extremo: Cypress
