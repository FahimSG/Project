var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{"response": "Hello Its Fahim!"}');
});

app.get('/will', function (req, res) {
    res.send('{"response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{"response": "It works" }');
});
