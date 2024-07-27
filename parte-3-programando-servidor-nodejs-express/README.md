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
- Cuando estamos en desarrollo (de manera local) es factible de que todo funcione al 100%, pero para desplegar o para mandar a produccion la aplicacion tambien debemos crear un 'production build' y para esto se usa el comando 'npm run build'

## Guardando datos en MongoDB
- Para poder agregar MongoDB primero debemos de agregar mongoose que es un mapear de objetos, el cual nos ayudara a mapear y guardar objetos JavaScript como documentos en Mongo, para eso se usa el comando 'npm install mongoose'
- La configuracion respectiva de lo que sera la conexion de mongoDB estara en el archivo mongo.js

fullstackopen
bNtiEROvlw2XVoyQ

mongodb+srv://fullstackopen:bNtiEROvlw2XVoyQ@fullstackopen.nexlcsi.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen

mongodb+srv://fullstackopen:<password>@fullstackopen.nexlcsi.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen



> [!NOTE]
> - Si en la parte de ejecucion del Servidor Web Simple (tema: Node.JS y Express) esta presentando error toca eliminar en el package.json el "type": "module; ya que iniciando la aplicacion estamos usando metodos require() para su implementacion
> - La gran mayoria de NodeJS esta escrita con los modulos CommonJS por ende es que se usa el metodo require() en vez de usar el import de ES6; aunque se pueden usar cualquiera de las dos formas veremos mucho mas codigo escrito con modulos CommonJS
> - Las primera practicas de desarrollador el Back-End con NodeJS estan descritas en el archivo 'index-node.js'; despues de incorporar Express 'index.js' sera el archivo a seguir trabajando
