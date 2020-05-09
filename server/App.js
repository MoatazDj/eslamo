let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/signup', require('./routers/signup'))
app.use('/signin', require('./routers/signin'))
app.use('/verses', require('./routers/verses'))

app.use(express.static('client/build'));

module.exports = app;