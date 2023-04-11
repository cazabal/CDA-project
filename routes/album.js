const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
    let result = await db.query('SELECT * FROM "Album" a JOIN "Artist" b ON a."ArtistId" = b."ArtistId"')
    res.json(result.rows)
})

router.delete('/:AlbumId', async (req, res) => {
    let del = await db.query('DELETE FROM "Album" WHERE "AlbumId" = $1', [req.params.AlbumId])
    res.json({ status: "ok" });
})

router.put('/:AlbumId', async (req, res) => {
    let update = await db.query('UPDATE "Album" SET "Title" = $1, "ArtistId" = $2 WHERE "AlbumId" = $3', [req.body.title, req.body.artistId, req.params.AlbumId])

})


module.exports = router