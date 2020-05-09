const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.get('/', (req, res, next) => {
    //const state = req.query.state;
    const state = 'scared'
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
    console.log(req.body)
})
module.exports = router;