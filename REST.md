
# Documentacion

GitLab Wiki:

https://github.com/cazabal/CDA-project.git

## ¿Que es un API REST?

# API REST de ejemplo

Bienvenido a la documentación de la API REST de ejemplo. Esta API permite a los desarrolladores acceder a diferentes recursos a través de una interfaz web.



## Recursos

La API ofrece los siguientes recursos:

-   `/productos`: devuelve una lista de productos
-   `/productos/{id}`: devuelve un producto específico según su ID

## Verbos HTTP

La API utiliza los siguientes verbos HTTP:

-   `GET`: se utiliza para obtener datos
-   `POST`: se utiliza para enviar datos
-   `PUT`: se utiliza para actualizar datos
-   `DELETE`: se utiliza para eliminar datos

## Códigos de estado HTTP

La API devuelve los siguientes códigos de estado HTTP:

-   `200 OK`: solicitud exitosa
-   `201 Created`: recurso creado exitosamente
-   `400 Bad Request`: solicitud incorrecta
-   `404 Not Found`: recurso no encontrado

## Parámetros de consulta

Los siguientes parámetros de consulta están disponibles:

-   `categoria`: devuelve los productos de una categoría específica
-   `precio`: devuelve los productos con un precio menor o igual al valor especificado

## Autenticación

La API utiliza la autenticación básica para proteger los recursos. Los desarrolladores deben proporcionar un nombre de usuario y una contraseña para acceder a la API.


Ejemplo de API Rest con NodeJs utilizando el famework Express:


const express = require('express');
const app = express();
const port = 3000;

let products = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 }
];

// Obtener todos los productos
app.get('/products', (req, res) => {
  res.send(products);
});

// Obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) res.status(404).send('El producto no fue encontrado');
  res.send(product);
});

// Agregar un nuevo producto
app.post('/products', (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.send(product);
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en el puerto ${port}.`);
});

# Documentación de rutas del API REST

El API REST es un conjunto de rutas que se utilizan para interactuar con una aplicación web. Estas rutas permiten realizar diversas operaciones, como obtener datos, enviar datos, actualizar información, eliminar recursos, etc. Cada ruta está asociada con un método HTTP, que indica la acción que se debe realizar en el servidor.

Aquí hay una descripción de los métodos HTTP más comunes utilizados en las rutas del API REST:

-   `GET`: se utiliza para obtener datos del servidor. Por ejemplo, para obtener una lista de usuarios o un registro específico.
-   `POST`: se utiliza para enviar datos al servidor. Por ejemplo, para crear un nuevo registro en la base de datos.
-   `PUT`: se utiliza para actualizar datos en el servidor. Por ejemplo, para modificar un registro existente.
-   `DELETE`: se utiliza para eliminar un recurso en el servidor. Por ejemplo, para eliminar un registro de la base de datos.

Además de estos métodos, también existen otros como `PATCH`, `HEAD`, `OPTIONS`, etc., que se utilizan para realizar otras operaciones en el servidor.

Las rutas del API REST suelen seguir una convención de nomenclatura específica. Aquí hay un ejemplo de cómo se podría diseñar una API REST para gestionar recursos de usuarios:

-   `GET /users`: devuelve una lista de todos los usuarios.
-   `GET /users/{id}`: devuelve un usuario específico según su ID.
-   `POST /users`: crea un nuevo usuario.
-   `PUT /users/{id}`: actualiza un usuario existente.
-   `DELETE /users/{id}`: elimina un usuario existente.

En este ejemplo, `users` es el recurso que se está gestionando y `{id}` es una variable que representa el ID del usuario.

Es importante tener en cuenta que las rutas del API REST deben ser consistentes y seguir un patrón coherente para facilitar su uso y mantenimiento. Además, también deben ser seguras y estar protegidas contra posibles ataques. Por lo tanto, se recomienda seguir las mejores prácticas de seguridad en el diseño y la implementación de las rutas del API REST.


