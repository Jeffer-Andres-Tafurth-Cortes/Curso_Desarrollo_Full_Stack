# PARTE 3 - PROGRAMANDO UN SERVIDOR CON NODEJS Y EXPRESS

## Node.js y Express
- Ya teniendo conocimienot de JavaScript nos permite pasar al Back-End usando tecnologias como NodeJS y ExpressJS; esto es debido a que NodeJS es ejecutado a base de JavaScript y usa el motor de Chrome V8 de Google.
- Dentro del archivo 'package.json' se debe agregar un comando, en la parte de los scripts se agrega el siguiente comando: '"starts": "node index.js",' este comando explica que en la terminal cuando ejecutemos 'node index.js' o 'npm start' se ejecuta el archivo; en este caso el archivo que se esta utilizando es el 'index.js'
- Una vez teniendo el servidor web simple podemos ejecutar el comando 'npm start' para ver el resultado de la consola en la terminal o tambien podemos acceder a la URL 'http://localhost:3001/' que es donde se esta ejecutando de manera local (recordemos que el puerto 3001 esta definido en el archivo index.js)
- El metodo JSON.stringify() nos ayuda a reciir un objeto en forma de JavaScript y convertilos a cadena de texto JSON para poder procesar dicha informacion (esto aplica si solo estamos usando NodeJS en el Back-End sin ninguna libreria)
- Aunque se pueda implementar el servidor web http integrado con Node esto a largo plazo es engorroso y mas si la aplicacion crece de tamaño, para esto usamos la libreria Express para construir el Back-End de mejor manera, para instalar Express usamos el comando 'npm install express' en la terminal
- Para incorporar Express toca seguir usando el modulo de CommonJS 'const express = require('express')'
- Cada vez que cambiemos algo del servidor como en este caso implementamos Express toco cerrar el puerto y luego volverlo a inicializar, debido a que en la web el inicio de los servidores es automatico para eso podemos implementar 'nodemon' que es basicamente una herramienta que todo el tiempo esta escuchando los cambios realizados en el servidor (en este caso en el archivo index.js) el cual reiniciará automáticamente tu aplicación de node. Para instalar 'nodemon' se usa el comando 'npm install --save-dev nodemon', esto para instalar nodemon como dependencia de desarrollo
- Para inicializar el servidor con 'nodemon', dentro de scripts del archivo package.json se escribe el siguiente comando: "dev": "nodemon index.js",; y ya podemos inicializar nodemon en la terminal con el conocido 'npm run dev' para que este todo el tiempo escuchando el servidor
- Cuando se habla del termino REST en API REST hablamos que es un estilo arquitectonico destinado a crear aplicaciones web escalables
- Dentro de las peticiones HTTP tenemos: GET, POST, DELETE, PUT y PATCH; en donde podemos tener dos peticiones GET (una que obtenga un solo recurso usando el id y la otra que obtenga todos los recursos). Cabe destacar que lo que son DELETE, PUT y PATCH (se necesita el id del recurso para ejecutar la respectiva operacion)
- POSTMAN es una herramienta que nos permite realizar pruebas hacer de las peticiones HTTP, eso nos simplifica el trabajo al probar una API en el Back-End

## Despliegue de la aplicacion a internet
- Primero hay que tener en cuenta si nos genera error en la politica del mismo origen, esto es debido a que cuando se usa Postman como es de prueba no hay ningun problema pero si ya de pasa a desplegar la aplicacion y generar error hay que importar CORS, que basicamente nos permite que acepte otras URL que no comparten el mismo origen de la aplicacion pero que a su vez sea seguro usar otras URL
- Debido a que el Front-End y el Back-End de la aplicacion tienen diferentes direcciones URL en su ejecucion, en el Back-End se debe de instalar el CORS para habilitan las solicitudes cruzadas legítimas, esto se hace con el comando 'npm install cors'
- Cuando estamos en desarrollo (de manera local) es factible de que todo funcione al 100%, pero para desplegar o para mandar a produccion la aplicacion tambien debemos crear un 'production build' y para esto se usa el comando 'npm run build'

## Guardando datos en MongoDB
- Para poder agregar MongoDB primero debemos de agregar mongoose que es un mapear de objetos, el cual nos ayudara a mapear y guardar objetos JavaScript como documentos en Mongo, para eso se usa el comando 'npm install mongoose'
- La configuracion respectiva de lo que sera la conexion de mongoDB estara en el archivo mongo.js
- Ya teniendo defininida la URL de mongoDB junto con el usuario y la respectiva contraseñan (en este caso eso esta en el archivo mongo.js), ejecutamos en la terminal de la raiz del back-end el comando node mongo.js password (en donde password es la resepctiva contraseña creada con ese usuario)
- Debido a que la direccion URL de la base de datos con la respectiva contraseña no es seguro dejarlos en archivos donde estan toda la programacion es mejor manejarlos bajo variables de entorno (env); para ello se utiliza dotenv (un modulo de carga de variables de entorno) y se instala con el comando 'npm install dotenv, seguido de ello en la raiz de la carpeta del back-end se debe de crear un archivo llamado .env y alojar alli direccion URL de la base de datos y la contraseña
- El archivo .env debe ignorarse de inmediato en .gitignore, ¡ya que no queremos publicar ninguna información confidencial públicamente!
- Despues de ya llevar un tiempo en donde casi tengamos nuestra aplicacion (Front-End y Back-End) terminada es bueno ir manejando los errores, esto tambien sirve pa' ir probando funcionalidades y agregar cosas en llegado caso que algo no sirva

## Validacion y ESLint
- Por lo general existen restricciones que queremos aplicar a la aplicacion en la cual estemos trabajando, en este caso como es una aplicacion de notas no queremos que se guarde alguna nota con el contenido vacio y se debe de realizar dentro del codigo una verificacion por si esto llegase a suceder (basicamente realizar validaciones)
- En este caso se agrego como validadores minLength y required de mongoose en el esquema 'noteSchema' de la nota definido en el archivo 'note.js'

> [!NOTE]
> - Si en la parte de ejecucion del Servidor Web Simple (tema: Node.JS y Express) esta presentando error toca eliminar en el package.json el "type": "module; ya que iniciando la aplicacion estamos usando metodos require() para su implementacion
> - La gran mayoria de NodeJS esta escrita con los modulos CommonJS por ende es que se usa el metodo require() en vez de usar el import de ES6; aunque se pueden usar cualquiera de las dos formas veremos mucho mas codigo escrito con modulos CommonJS
> - Las primera practicas de desarrollador el Back-End con NodeJS estan descritas en el archivo 'index-node.js'; despues de incorporar Express 'index.js' sera el archivo a seguir trabajando
> - El archivo .env debe ignorarse de inmediato en .gitignore, ¡ya que no queremos publicar ninguna información confidencial públicamente!
> - Cuando en back-end que estemos trabajando ya se extienda mucho es bueno ir probando el back-end, ya sea con el navegador, con Postman o con el cliente REST de VS Code
> - Cuando se trabaje en un back-end es fundamental estar atento a la salida de la consola del backend

---

# PARTE 4 - PROBANDO SERVIDORES EXPRESS, ADMINISTRACION DE USUARIOS

## Estructura de la aplicacion backend, introduccion a las pruebas
- A pesar de que ya teniendo despues de la parte 3 un back-end construido debemos separar cierta logica en diferentes archivos, esto para que sea mas escalable y legible
- Se crear una carpeta llamada 'utils' en donde se crear a su vez el archivo 'logger.js' en donde estara la logica que corrresponde al manejo de los 'console.log()' y 'console.error()' que se han usado en el 'index.js' del back-end
- El manejo de las variables de entorno del back-end se extraen en un archivo llamado 'config.js', este archivo estara dentro de la carpeta 'utils'
- Se cambian un par de archivos, el contenido de la aplicacion Express que estaba en el archivo 'index.js' va a pasar a un archivo llamado 'app.js' de la raiz del back-end; y el archivo 'index.js' ahora solo recibira de lo que debe de renderizar la aplicacion, incluyento el config.js, el logger.js y el puerto a escuchar, en pocas palabras "El archivo index.js solo importa la aplicación real desde el archivo app.js" 
- Como se esta separando la aplicacion del back-end para tener la logica en varios archivos, de crear la carpeta controllers y a su vez se crea el archivo 'notes.js' en donde stara la logica con respecto a las rutas creadas para la aplicacion de Notas

