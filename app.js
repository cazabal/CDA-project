// importamos la librería Express y creamos una instancia de la aplicación Express.

const express = require('express');
const app = express();

// definimos una ruta para la página principal ('/') y respondemos con un mensaje de texto.

app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');

});

// iniciamos el servidor Express en el puerto 3000.



app.listen(3000, () => {
    console.log('Servidor Express en ejecución en http://localhost:3000');

});


const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Chinook',
    password: 'Atongo1212_',
    port: 5432,
});



app.get('/api/album', async (req, res) => {

    pool.connect()

    let result = await pool.query('Select * from "Album"')
    res.json(result.rows)

})

