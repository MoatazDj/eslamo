let express = require ('express');
let bodyParser=require('body-parser')
let session = require('express-session');
let cors = require('cors')
//let mysql=require('mysql')//verify
//var User=require()// verify


let app=express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('client/build'));
app.use('/signUp', require('./routers/signup'))
// app.use('/signIn', require('./routers/signin'))

module.exports=app