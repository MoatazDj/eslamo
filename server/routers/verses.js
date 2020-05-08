const express = require('express')
const router = express.Router()
const connection = require('../../database/index')

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM verses', (err, result) => {
        if (err) console.log("Error Verses " + error)
        else {
            if (result.length > 0) {
                res.send(result)
            }
        }

    })
})
module.exports = router