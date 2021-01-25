# Prueba Tecnica Para AIONTECH

Back End con NodeJs

## Instalacion

1. Clonar repositorio ` https://github.com/hitzu/PruebaAiontech.git `
2. Instalar todas las dependencias con ` npm install `
3. Levantar el servidor con ` npm start `

## Uso

Las peticiones a los recursos de la api son consumidas en 

`  http://localhost:8080/ `

Revisar la documentacion para consumir los recursos de la api en el documento 

` server/Documentacion/index.html  `

## Arquitectura del sistema

La prueba tecnica utiliza una arquitectura modelo vista controlador 

1. Modelo: carpeta ` Data ` aqui se guardan todos los archivos de descripcion de los modelos de las bases de datos, en este caso se utilizo para guardar los datos en un archivo json.
2. Vista: carpeta ` routes ` almacena los archivos que describen las rutas para consumir los recursos de la api contiene un middleware que sirve para autentificar a los usuarios utilizando jwt
3. Controlador: carpeta ` controllers ` contiene los archivos de los metodos que se ejecutan para devolver los recursos solicitados por los clientes

## Librerias externas

1. [ApiDoc](https://apidocjs.com/) : Crea la documentacion de RESTFUls web APIs
2. [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) : Crea los tokens para autenticar a los usuarios mediante token
3. [passportjs](http://www.passportjs.org/) : Administrador de estrategias de seguridad
3. [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) : Permite crear las estrategias de autenticacion por token


## License
[MIT](https://choosealicense.com/licenses/mit/)