const express = require('express');
const router = express.Router();
const connection = require('../../database/index');

router.get('/', (req, res, next) => {
    const state = req.query.state;

    console.log('Verses GET request received with state :', state);

    connection.query('select verse_number, surah_number from verses v inner join '+ 
    'states_verses sv  on sv.verse_id = v.verse_id inner join '+ 
    'emotional_states es on sv.emotional_state_id = es.emotional_state_id where emotional_state =\''+ state +'\';', (err, results) => {
     if(err) console.log('error') ;
     res.send(results);
    });
});


module.exports = router;