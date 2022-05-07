const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

//middleware

app.use(cors());
app.use(express.json());

//mridul debo



app.get('/', (req,res) =>{
    res.send('data and data')
});

app.listen(port, () =>{
    console.log('running....', port);
})