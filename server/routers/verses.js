const express = require('express');
const router = express.Router();
const connection = require('../../database/index');
const app = require('../App')

router.get('/', (req, res, next) => {
    //const state = req.query.state;
    const state = 'stuck'
    //console.log('Verses GET request received with state :', state);

    connection.query('select * from verses v inner join ' +
        'states_verses sv  on sv.verse_id = v.verse_id inner join ' +
        'emotional_states es on sv.emotional_state_id = es.emotional_state_id where emotional_state =\'' + state + '\';', (err, results) => {
            if (err) throw err;
            // console.log(results[0]);
            // console.log(results[0].verse_number);
            res.send(results);
        });
});
router.post('/', (req, res) => {
    var verse_id = req.body.verse_id;
    var user_id = app.user_id;
    var insertFavorites = 'INSERT INTO users_verses  (user_id, verse_id) VALUES (?,?)'
    connection.query(insertFavorites, [user_id, verse_id], (error, result) => {
        if (error) console.log('insertion error', error)
        res.json({
            message: 'favorites added successfully'
        })
    })
})

module.exports = router;