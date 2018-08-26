require('dotenv').load();
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require("path");
var port = 3000;
var artistObj;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine('html', require('ejs').renderFile);    
app.set('view engine', 'ejs');
app.use(express.static('app'));
app.set('views', path.join(__dirname, '/app/views'));


app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/post', function (req, res) {
    request.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + req.body.artistName + "&api_key=" + process.env.API + "&format=json", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        artistObj = JSON.parse(body);
        //console.log(artistObj);
        res.render('artist.html',{
            artist: artistObj
        });
    });
});

app.listen(process.env.PORT || port, ()=> console.log("Server is running on port " + port));