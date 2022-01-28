const express = require('express');
const datos= require('./../services/verificacionServices');
const info = require('./../middlewares/verificacionInf');
const model = require('./../model/dbRadiacion');
const router = express.Router();

const service = new datos;

router.get('/',
        async (req, res, next) => {
            try{
                await console.log('paso por aca');
            }catch(error){
                await console.log('paso por aca');
            }
            await console.log('paso por aca');
        }
    );

router.post('/',
    async (req, res, next) => {
        
        try{
            const body = req.body['data'];
            if( await service.count(body)){
              model
                .insert(1,0)
                .then(
                  res.status(200).json({
                    "mensagge":"Tiene radiacion",  
                  })
                )
                .cath(err => {
                  res.status(404).json('Hubo un error');
                })
              
            }else{
              res.status(404).json('No tiene radiacion');
            };
        }catch(error){
            res.status(404).json(error.message);
        }
    }
);


module.exports = router;