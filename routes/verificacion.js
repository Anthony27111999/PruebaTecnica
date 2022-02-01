const express = require('express');
const datos= require('./../services/verificacionServices');
const info = require('./../middlewares/verificacionInf');
const {select, insert} = require('./../model/dbRadiacion');
const router = express.Router();

const service = new datos;

router.get('/',
        async (req, res, next) => {
          try{
            let server = await select();       
            server = await service.ratio(server);
            res.status(200).json({
              "mensagge": "andubo bien",
              server,

            });
            }catch(error){

                res.status(400).json({
                  "mensagge": "Error en el js"
                });
            }
        }
    );

router.post('/',
    async (req, res, next) => {        
        
        try{
            const body = req.body['data'];
            if( await service.count(body)){
              insert(1,0)
                .then(
                  res.status(200).json({
                    "mensagge":"Tiene radiacion",  
                  })
                )
                .catch(err =>{
                  res.status(400).json({
                    "error": err.mensagge,
                  })
                })
            }else{
              insert(0,1)
              .then(
                res.status(403).json({
                  "message": "No tiene radiacion",
                })
                )
                .catch(err =>{
                  res.status(500).json({
                    "error": err.mensagge,
                  })
                })
            };
          
        }catch(error){
            res.status(404).json({
              "error":error.message
            });
        }
    }
);


module.exports = router;