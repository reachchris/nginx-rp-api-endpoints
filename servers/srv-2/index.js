const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello world 2!");
});

app.listen(3000);