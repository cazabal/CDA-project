const express = require('express')
const path = require('path')

const app = express()
const { Pool } = require('pg');
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

// Require donde nostros hacemos la seelect del archivo rotues / loquesea y lo mostramos en la ruta /api/....
app.use('/api/album', require('./routes/album'))
app.use('/api/track', require('./routes/track'))
app.use('/api/employee', require('./routes/employee'))
app.use('/api/artist', require('./routes/artist'))







app.listen(3000, () => {
    console.log('Servidor en execució a http://localhost:3000')
})
