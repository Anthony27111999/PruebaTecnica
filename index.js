const express = require('express');
const routerApi = require('./routes');
const port = process.env.port || 3000;
const app = express();
const cors = require('cors');

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


function hayarRadiacion(arrays){
    let array =[];
    let puente = req.body['data'];
    for (const iterator of puente) {
        array.push(Array.from(iterator));
    }
    for(let i =0;i<array.length;i++)
    {
        console.log(array[i]);
    }

    for(let y =0;y<array.length;y++)
    {
        for(let x=0;x<array[y].length;x++)
        {
            console.log(array[y][x]);
            console.log(array[y+1][x]);
        
            console.log(typeof(array[y-1][x]));
            //console.log(array[y][x+1]);
            //console.log(array[y][x-1]);
/*
            if((array[y+1][x] != undefined)&&(array[y-1][x] != undefined) && (array[y][x+1] != undefined)&&(array[y][x-1] != undefined)){
                if(array[y][x] === array[y-1][x] && array[y][x] === array[y+1][x]){
                    console.log(array[y][x]);
                    console.log(array[y-1][x]);
                    console.log(array[y+1][x]);
                }
            }*/
        }
    }
}


