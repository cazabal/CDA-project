const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
    let result = await db.query('select * from "Track"')
    res.json(result.rows)
})


module.exports = router