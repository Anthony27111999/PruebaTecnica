const express = require('express');
const port = process.env.port || 8080;
const app = express();
const routerApi = require('./routes');
const cors = require('cors');
const pg = require('pg');

app.use(express.json());
app.use(cors());

app.post('/p',(req,res)=>{
    res.status(201).json({

    })
});

routerApi(app);
app.listen(port,()=>{
    console.log(port);
});


