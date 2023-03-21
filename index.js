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





