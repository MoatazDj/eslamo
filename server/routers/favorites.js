var express = require('express')
var router = express.Router()
const connection = require('../../database/index');
var app = require('../App')


router.get('/', (req, res) => {
    var selectUserFavories = 'SELECT * FROM verses INNER JOIN users_verses ON verses.verse_id= users_verses.verse_id AND users_verses.user_id=?'
    connection.query(selectUserFavories, [app.user_id], (error, result) => {
        if (error) console.log(error)
        res.send(result)
    })
})

router.post('/', (req, res) => {
    var deletefromFavorites = 'DELETE FROM users_verses WHERE state_verse_id = ? '
    connection.query(deletefromFavorites, [req.body.sate_verse_id], (error, result) => {
        res.send(result)
    })
})
module.exports = router