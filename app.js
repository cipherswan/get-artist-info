require('dotenv').load();
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var artistObj;

app.engine('html', require('ejs').renderFile);    
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(process.env.PORT || port, ()=> console.log("Server is running on port " + port));