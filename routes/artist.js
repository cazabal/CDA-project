const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
    let result = await db.query('SELECT * FROM "Artist"')
    res.json(result.rows)
})

router.post('/', async (req, res) => {

    // Recupero el ultimo id para cuando añada uno nuevo añadirle su nueva id
    let result = await db.query('SELECT MAX("AlbumId") FROM "Album"')

    // hago el insert del nuevo album que recojo en req ( este es un json ) 
    // al insert le paso una array con los diferentes datos que recojo de req y de result y se le asigna a $1,2,3
    let insert = db.query('INSERT INTO "Album" VALUES ($1, $2, $3)',
        [(result.rows[0].max + 1), req.body.title, req.body.IdArtist])

    res.json({ status: "ok" })
})

module.exports = router