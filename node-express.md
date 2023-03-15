## Recogida de datos de las tecnologías necesarias – NODE / EXPRESS

### ¿Qué es NODE?

x

### ¿Qué es Express?

> Express es un framework web de Node.js que se utiliza para crear
> aplicaciones web en el lado del servidor de manera rápida y fácil.
> Express proporciona una capa de abstracción sobre Node.js, lo que
> permite a los desarrolladores crear aplicaciones web de manera más
> eficiente y con menos código.
> 
> Con Express, los desarrolladores pueden definir rutas y manejar
> solicitudes HTTP (por ejemplo, GET, POST, PUT y DELETE), así como
> crear y administrar middleware. El middleware son funciones que se
> ejecutan en el proceso de manejo de solicitudes, lo que permite la
> creación de aplicaciones web escalables y modulares.
> 
> Express también es altamente personalizable y se integra fácilmente
> con otras bibliotecas y módulos de Node.js. Además, Express tiene una
> gran cantidad de recursos de la comunidad, como módulos de middleware,
> plantillas de vistas y herramientas de desarrollo, que facilitan la
> creación de aplicaciones web de alta calidad.

## ¿Cómo utilizo Node en mis proyectos de JavaScript?

### Instalación

Para utilizar Node en tus proyectos de JavaScript, lo primero que necesitas hacer es instalar Node.js en tu sistema. Puedes hacerlo siguiendo estos pasos:

1.  Ve al sitio web oficial de Node.js en el siguiente enlace: [https://nodejs.org/](https://nodejs.org/)
2.  Descarga la última versión LTS de Node.js para tu sistema operativo.
3.  Sigue las instrucciones del instalador para instalar Node.js en tu sistema.

Una vez que hayas instalado Node.js, podrás usarlo en tus proyectos de JavaScript. Puedes ejecutar tus archivos de JavaScript utilizando Node.js desde la línea de comandos de tu sistema operativo. También puedes utilizar Node.js para instalar paquetes de JavaScript desde el repositorio oficial de paquetes de Node.js, npm.

 - Seguidamente abriremos nuestra terminal o PowerShell y navegaremos hasta el directorio de nuestro proyecto.
 - Crearemos un archivo JavaScript :  <nombre_archivo>.js  , este
   archivo será el archivo principal de tu proyecto y donde escribirás
   el código para tu aplicación Node.js.
 - Abriremos el archivo js en un editor como Visual Studio Code y
   escribiríamos nuestro código.
 - Por ultimo para ejecutar tu aplicación Node.js, ejecuta el siguiente
   comando en la terminal:
   
  

       node <nombre_archivo>.js
    
# Express
### Instalación de Express framework:

 - Abrimos una terminal en la raíz de nuestro proyecto.

 - Ejecutaremos el siguiente comando : 

        npm init-y

Este comando nos generara un archivo “package.json” con valores predeterminados que podremos modificar si fuera necesario:

Seguidamente utilizaremos otro comando el cual nos instalara Express en nuestro proyecto:

    npm install express

Este comando instala Express y añade una entrada en el archivo que hemos creado anteriormente “package.json” que nos indicara que nuestro proyecto depende de la librería Express.

Ahora que ya tenemos instalado en nuestro proyecto Express procederemos a hacer una prueba para validar que funciona correctamente:

Crearemos un archivo index.js el cual será el archivo principal de nuestra aplicación y donde escribiremos el código para la aplicación Express.

En el escribiremos el siguiente código de ejemplo:


    // importamos la librería Express y creamos una instancia de la aplicación Express.
    
    const express = require('express');
    const app = express();
    
    // definimos una ruta para la página principal ('/') y respondemos con un mensaje de texto.
    
    app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
    
    });
    
    // iniciamos el servidor Express en el puerto 3000.
    
    app.listen(3000, () => {
    console.log('Servidor Express en ejecución en el puerto 3000');
    
    });


Una vez tenemos listo el archivo, ejecutamos el siguiente comando en nuestra terminal para iniciar nuestra aplicación:

    node index.js


Por ultimo abriremos nuestro navegador y entramos en la siguiente url: http://localhost:3000

Deberíamos ver el mensaje "¡Hola mundo desde Express!" en la página web.



### Estructura de directoris Express:



|── node_modules/ Contiente dependencias de Node.js que el proyecto utiliza ( Se genera automáticamente : ”npm install”)

|── **public**/ Contiene todos los archivos estáticos del proyecto ( CSS , JS, imagenes ) Directorio accessibles al público .

│  |── css/

│  |── js/

│  └── images/

 |── **views**/  Contiene todas las plantilles de vistes que utiliza la aplicacion (HTML y código para mostrar datos dinámicos)

│  |── partials/

│  |── pages/

│  └── layouts/

|── routes/ Contiene todos los archivos de enrutamiento que definen las rutas URL y las acciones que se deben tomar en respuesta a las solicitudes de esas rutas.

|── controllers/ Contiene los archivos controladores que se utilizan para ejecutar la lógica de la aplicación y para responder a las solicitudes HTTP enviadas por los clientes.

|── models/ Contiene los archivos de modelo que se utilizan para definir y manipular la información de la base de datos.

|── config/ Contiene archivos de configuración que se utilizan para configurar la aplicación.

|── app.js Este archivo es el punto de entrada de la aplicación. En este archivo, se configura y se inicializa la aplicación Express.

|── package.json Este archivo contiene información sobre el proyecto, como las dependencias del proyecto y los scripts que se pueden ejecutar.

└── README. md Este archivo es una descripción general del proyecto y se utiliza para proporcionar información sobre el proyecto.

### Rutas

> Las rutas en Express se utilizan para definir las URLs que la
> aplicación debe manejar y para definir las funciones que se deben
> ejecutar cuando se solicita una URL en particular. Las rutas se
> definen mediante la instancia de la aplicación Express y pueden ser de
> varios tipos, como rutas de solicitud GET, POST, PUT, DELETE y más.


### Definición de rutas

La definición de una ruta en Express es bastante sencilla. Para definir una ruta, utilizamos el objeto “app” (que es una instancia de la clase “express()”) y llamamos a uno de sus métodos correspondientes a la solicitud HTTP que se desea manejar. Por ejemplo, para manejar una solicitud HTTP “GET” a la URL “/users”, podemos utilizar el método “get()” de la siguiente manera:

#### *Ejemplo*

    app.get('/users', function(req, res) {
    
    // función de manejo de la solicitud
    
    });
#### *Explicación*

> Este método recoge dos argumentos el primer argumento es la ruta 
> ‘/users’  y el segundo argumento es la función que manejará la
> solicitud.


### Parámetros de ruta
En muchas ocasiones, es posible que necesitemos manejar rutas dinámicas en lugar de rutas estáticas. Para manejar este tipo de rutas, utilizamos parámetros de ruta. Los parámetros de ruta son partes de la URL que se pueden cambiar dinámicamente.

#### *Ejemplo*
    app.get('/users/:id', function(req, res) {
    
    var userId = req.params.id;
    
    // función de manejo de la solicitud
    
    });
#### *Explicación*
> Utilizamos “:id” para indicar que la ruta “/users/” puede tener un
> parámetro “id” dinámico. Este parámetro dinámico se puede acceder en
> la función de manejo de la solicitud a través de “req.params. id”.

### Rutas Anidadas
En Express, es posible anidar rutas dentro de otras rutas. Esto es útil cuando se desea tener una serie de rutas relacionadas bajo una misma URL base. Por ejemplo, si queremos tener todas las rutas relacionadas con usuarios bajo la URL /users.

#### *Ejemplo*

    var usersRouter = express.Router();
    
    usersRouter.get('/', function(req, res) {
    
    // función de manejo de la solicitud para /users
    
    });
    
    usersRouter.get('/:id', function(req, res) {
    
    // función de manejo de la solicitud para /users/:id
    
    });
    
    app.use('/users', usersRouter);
#### *Explicación*

> Creamos un enrutador (“usersRouter”) que maneja todas las solicitudes
> relacionadas con usuarios. Definimos las rutas “/” y “/:id” dentro de
> este enrutador y luego lo usamos con “app.use()” para anidar todas las
> rutas bajo la URL “/users”. De esta manera, podemos definir las rutas
> relacionadas con usuarios de manera modular y organizada.


### Middleware de ruta

El middleware de ruta se utiliza para realizar operaciones específicas para una o varias rutas en particular. Esto se hace colocando una o varias funciones de middleware antes de la función de manejo de la solicitud de la ruta en cuestión. El middleware de ruta puede realizar operaciones como la verificación de autenticación, la validación de datos, el registro de solicitudes y respuestas, entre otras.
#### *Ejemplo*



    app.get('/users', middleware1, middleware2, function(req, res) {
    
    // función de manejo de la solicitud
    
    });
#### *Explicación*
> “middleware1” y “middleware2” son funciones de middleware que se
> ejecutarán antes de la función de manejo de la solicitud para la ruta
> “/users”. Estas funciones pueden realizar cualquier operación que sea
> necesaria antes de que se ejecute la función de manejo de la
> solicitud.



### Middleware de aplicación

El middleware de aplicación se utiliza para realizar operaciones generales en todas las solicitudes que maneja la aplicación. Esto se hace colocando funciones de middleware antes de todas las rutas definidas en la aplicación.

#### *Ejemplo*

    app.use(middleware1);
    
    app.use(middleware2);

#### *Explicación*

> En este caso, “middleware1” y “middleware2” son funciones de
> middleware que se ejecutarán antes de todas las rutas definidas en la
> aplicación. Estas funciones pueden realizar cualquier operación que
> sea necesaria antes de que se maneje cualquier solicitud.


### Uso de enrutadores

En Express, es común utilizar enrutadores para organizar las rutas en módulos independientes y reutilizables. Un enrutador es un objeto que se utiliza para definir y manejar rutas independientes en una aplicación.

#### *Ejemplo*

    const router = express.Router();
    
    router.get('/users', function(req, res) {
    
    // función de manejo de la solicitud
    
    });
    
    router.post('/users', function(req, res) {
    
    // función de manejo de la solicitud
    
    });
    
    module.exports = router;

#### *Explicación*
> Hemos creado un enrutador que maneja las rutas “/users” de tipo “GET”
> y “POST”. Luego, hemos exportado este enrutador para que se pueda usar
> en otros archivos de la aplicación.

Para usar el enrutador en nuestra aplicación, podemos hacer lo siguiente:
#### *Ejemplo*

    const usersRouter = require('./usersRouter');
    
    app.use('/users', usersRouter);


#### *Explicación*

> Hemos importado el enrutador “usersRouter” desde un archivo llamado
> “usersRouter.js”. Luego, hemos utilizado “app.use()” para usar el
> enrutador en nuestra aplicación y manejar todas las rutas que
> comienzan con “ /users”.




## Devolver datos JSON

En Express, se puede devolver datos en forma de JSON utilizando el método “res.json()”. Este método toma un objeto JavaScript y lo convierte en JSON antes de enviarlo como respuesta.

#### *Ejemplo*

    app.get('/users', function(req, res) {
    
    const users = [
    
    { id: 1, name: 'John Doe' },
    
    { id: 2, name: 'Jane Doe' }
    
    ];
    
    res.json(users);
    
    });


#### *Explicación*

> Hemos definido una ruta de tipo “GET” para “/users”. Dentro de la
> función de manejo de la solicitud, hemos creado un array de objetos
> que representan usuarios y luego hemos usado “res.json()” para enviar
> el array como respuesta en formato JSON.

Otra opción más recomendable es utilizar la función : “res.send()”, puesto que proporciona mayor claridad de respuesta.

A este metodo le tenemos que pasar el objeto como argumento y ya lo convierte a JSON
#### *Ejemplo*

    app.get('/users', function(req, res) {
    
    const users = [
    
    { id: 1, name: 'John Doe' },
    
    { id: 2, name: 'Jane Doe' }
    
    ];
    
    res.send(users);
    
    });


## Conexión con base de datos PostgreSQL:

Lo primero de todo necesitaremos instalar un paquete

Ejecutar en terminal de la raíz del proyecto:

    npm install pg

Una vez instalado necesitaremos establecer una conexión en el archivo que queremos acceder a la base de datos.


### *Ejemplo para acceder :*

    const { Pool } = require('pg');
    
    const pool = new Pool({
    
    user: 'usuario',
    
    host: 'localhost',
    
    database: 'basedatos',
    
    password: 'contraseña',
    
    port: 5432,
    
    });
    
    pool.query('SELECT NOW()', (err, res) => {
    
    if (err) {
    
    console.error(err);
    
    } else {
    
    console.log(res.rows);
    
    }
    
    pool.end();
    
    });

#### *Explicación*

> Hemos creado una instancia de la clase “Pool” del paquete “pg” y hemos
> especificado los parámetros de conexión a la base de datos. Luego,
> hemos realizado una consulta simple para obtener la fecha y hora
> actual del servidor de la base de datos. Finalmente, hemos cerrado la
> conexión con la base de datos.
