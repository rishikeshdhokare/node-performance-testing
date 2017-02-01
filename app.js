var express = require('express');
var app = express();

// first api which just responds to the request without any processing
app.get('/ping', (req, res) => {
    res.send('pong');
});

// second api which waits for 50 millis before responding 
app.get('/heavy-ping', (req, res) => {
    setTimeout(() => {
        console.info("eating time for demo");
        res.send('heavy pong');
    }, 50)
});

app.listen(8080);

console.log("Server started on 8080");
