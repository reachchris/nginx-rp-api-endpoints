const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.get('/', function(req, res){
    res.setHeader('SERVER-NODE', 1);
    res.send("Hello world 1!");
});
app.post('/', function(req, res){
    res.setHeader('SERVER-NODE', 1);
    res.setHeader('MESSAGE', 'This is your post data :)');
    res.send(req.body);
});

app.listen(3000);