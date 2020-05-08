const express = require('express')
const router = express.Router()
const connection = require('../../database/index')

router.get('/', (req, res, next) => {
    fetch("http://api.alquran.cloud/v1/ayah/262")
        .then(res => res.json())
        .then(data => {
            res.send({
                data
            });
            console.log(data)
        })
        .catch(err => {
            res.redirect('/error');
        });
})
module.exports = router