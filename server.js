require('DOTENV').config();
const express = require('express');
const app = express();
const PORT = PROCESS.EMV.APP_PORT;

app.get('/', function(req, res){
    res.send('Default Route');
});

app.get('/about', function(req, res){
    res.send('about');
});

app.listen(PORT, function(){
    console.log('server is running on port '+ PORT)
});