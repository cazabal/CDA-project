
// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Chinook',
//     password: 'contraseña',
//     port: 5432,
// });

// Verifica que la conexión sea exitosa
// pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('Error al conectarse a la base de datos', err.stack);
//     } else {
//         console.log('Conexión exitosa a la base de datos:', res.rows[0].now);
//     }
// });

// Exporta el pool para que puedas usarlo en otros archivos
// module.exports = pool;