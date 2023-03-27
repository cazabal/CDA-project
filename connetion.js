
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Chinook',
    password: '1234',
    port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectarse a la base de datos', err.stack);
    } else {
        console.log('Conexión exitosa a la base de datos:', res.rows[0].now);
    }
});

module.exports = pool;