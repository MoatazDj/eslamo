const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('../database/index')


let app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
connection.connect((err) => {
    if (err) throw err
    console.log('connected to mysql')
})
app.use('/signup', require('./routers/signup'))
app.use('/verses', require('./routers/verses'))


module.exports = app