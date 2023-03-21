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



const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Chinook',
    password: 'Atongo1212_',
    port: 5432,
});

// Verifica que la conexión sea exitosa
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectarse a la base de datos', err.stack);
    } else {
        console.log('Conexión exitosa a la base de datos:', res.rows[0].now);
    }
});

// Exporta el pool para que puedas usarlo en otros archivos
module.exports = pool;


