require('dotenv').config({path:".env"});
const express = require('express');
const { Menu } = require('../models/menuSchema');

const app = express();
const port = process.env.PORT || 5000 ;

app.get('/api', (req, res)=>{
    Menu.query().then(arr=>res.json(arr));
});

app.listen(port, ()=>{
    console.log('Server listening at port ' + port);
});