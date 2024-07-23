# PARTE 1 - INTRODUCCION A REACT

## Instalacion
- Se hace uso de Vite + NPM para poder descargar e importar todos los paquetes necesarios para poder usar React, en este caso el comando inicial para ello es: ' npm create vite@latest '

## Cambio de directorio e instalacion final
- Usando el comando ' cd ' seguido del nombre del directorio hace que accedamos a dicha carpeta y por ultimo se usa el comando ' npm install ' para instalar todas las dependencias necesarias

## Iniciar aplicacion
- Para poder ver la aplicacion de manera local se usa el comando ' npm run dev '

## Componentes
- React esta basado en componentes por ende cada funcion o const que defina un segmento macro sera entendido como un componente (aunque tengamos varios componentes dentro de un solo archivo); al momento de componetizar componentes es que puedan ser reutilizables si se llegan a requerir

## JSX
- Dentro de react se escribe y/o programa en JSX; es decir, una combinacion entre HTML y JavaScript

## Props
- Los props son la manera en React de pasar datos a componentes, esto tambien se le conocer como argumentos o parametros

## Lenguaje programacion
- Inicialmente podemos programar en React usando JavaScript o TypeScript, por ende todo es importante conoce algunos de estos dos lenguajes o en su defecto los dos para poder programar nuestra aplicaciones. Tener en cuenta la forma en como se definen las variables (let y const), los arrays (en React de hace mucho uso del metodo map() cuando tenemos que renderizar arrays), los objetos y clases

## Estado del componente, controladores de eventos
- Dentro de React se tienen funciones auxiliares de un componente, esto para poder reutilizar funciones en otras partes de codigo que sean requeridas
- Desestructuracion: es la manera de implementar JavaScript en React, aunque tambien es muy usado en los props para obtener esos datos (parametros y argumentos) pasados de un componente padre a un componente hijo
- Para cambiar el estado de un componente al renderizarse se hace uso de un hook llamado ' useState '
- Uno de los eventos mas sencillos, principales y comunes es el evento ' onClick '; basicamente ejecutar una funcion cuando se de click a un elementos (normalmente se asocia este evento al elemento button); este evento junto con el useState se puede hacer un contador de clicks, ejercicio fundamental para entender el concepto de la implementacion del evento onClick con el hook useState

## Un estado mas complejo, depurando aplicaciones React
- Cuando se trabaje con varios componentes dentro de un React se puede usar el useState varias veces o las veces que sean necesarias, cada useState de acuerdo a lo que estemos programando tendra su funcionalidad independiente sin afectar el resto de componentes y/o codigo; cuando se define un useState el estado inicial puede ser un numero, un string o hasta un array vacio
- Podemos usar renderizados condicionales en React en llegado caso que queramos que retorne algo en funcione de una condicion hecha

> [!NOTE]
> - Es fundamental componetizar las funciones o los elementos que tengamos en varios segmentos ya que asi se puede tener mas visibilidad de lo que se esta haciendo (recomendable dividir la aplicacion en varios componentes)
> - Los hooks en React nunca se deben de llamar dentro de un loop o condicional
> - Revisar las funciones definidas dentro de los eventos (en este caso del evento onClick)
> - No definir componentes dentro de los componentes
