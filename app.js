const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get(api+'/p',(req, res) => {
    res.send('Heloo API GET');
})


app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000'+api);
})