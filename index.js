require('dotenv').config({path:".env"});
const bodyParser = require("body-parser");

// Create App
const express = require('express');
const app = express();

// Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
const views = require("./routes/views");
app.use('/api/views/', views);

const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{
    console.log('Server listening at port ' + port);
});