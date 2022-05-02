require('dotenv').config();
const express = require('express');
const { TransactionDetail } = require('./models/transactionSchema');

const app = express();

app.get('/', (req, res)=>{
    TransactionDetail.query().then(arr=>res.json(arr));
});

app.listen(3000, ()=>{
    console.log('Server listening at port 3000');
});