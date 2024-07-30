# PARTE 10 - REACT NATIVE

## Introduccion a React Native
- Para el desarrollo de React Native podemos usar Expo que es una plataforma que facilita la configuracion, el desarrollo, la construccion y la implementacion de las aplicaciones en React Native.
- Primero debemos instalar la interfaz de linea de comandos expo-cli, para ello se usa el comando 'npm install --global expo-cli'; seguido de ello podemos inicializar el directorio, para ello se usa el comando: 'expo init rate-repository-app --template expo-template-blank@sdk-38'; en este caso el directorio creado se llamara rate-repository-app
- Cuando ejecutamos la aplicacion podemos verla en tres formatos, para iOS, para Android o en su defecto en la web
- Si queremos ejecutar la aplicacion en iOS o Android debemos de configurar un emulador, cada uno tiene su emulador respectivo
- Dentro de React Native podemos instalar y usar ESLint para mejorar el entorno de desarrollo, para ello se instala ESLint en donde el comando es 'npm install --save-dev eslint babel-eslint eslint-plugin-react'

## Conceptos basicos de React Native
- Al igual que React, React Native tambien se definen componentes, se reciben props como argumentos, se devuelve arbol de componentes, etc.
- React Native maneja JSX como lenguaje de desarrollo
- Dentro de React Native tenemos varios componentes principales, el componente 'Text' es el unico componente que puede tener hijos textuales, el componente 'View' es el componente basico de la interfaz de usuario similar al <div>, el componente 'TextInput' es un componente de campo de texto similar al <input> y el componente 'TouchableWithoutFeedback' (y otros componentes Touchable) sirve para capturar diferentes eventos de prensa en donde es similar <button>