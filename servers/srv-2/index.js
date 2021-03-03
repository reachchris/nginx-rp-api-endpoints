const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.get('/', function(req, res){
    res.setHeader('SERVER-NODE', 2);
    res.send("Hello world 2!");
});
app.post('/', function(req, res){
    res.setHeader('SERVER-NODE', 2);
    res.setHeader('MESSAGE', 'This is your post data :)');
    res.send(req.body);
});

app.listen(3000);