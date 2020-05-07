let express = require ('express');
let bodyParser=require('body-parser')
let cors = require('cors')
//let mysql=require('mysql')//verify
//var User=require()// verify


let app=express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/signUp', require('./routers/signup'))
app.use('/signIn', require('./routers/signin'))

module.exports=app