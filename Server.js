const express = require('express');
const { read } = require('fs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/favicon.ico', express.static('Images/favicon.ico'));

app.get('/' , (req,res) =>{
    res.render('index')
})

app.listen(3000)
console.log('http://localhost:3000/');
