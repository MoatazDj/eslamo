let express = require ('express');
let bodyParser = require('body-parser');
let cors = require('cors');
//let mysql=require('mysql')//verify
//var User=require()// verify


let app=express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client/build'));
app.use('/signup', require('./routers/signup'))
app.use('/signin', require('./routers/signin'))
app.use('/verses', require('./routers/verses'))

module.exports = app;