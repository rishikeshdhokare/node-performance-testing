var express = require('express');
var app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/heavy-ping', (req, res) => {
    setTimeout(() => {
        console.info("eating time for demo");
        res.send('heavy pong');
    }, 50)
});

app.listen(8080);

console.log("Server started on 8080");
