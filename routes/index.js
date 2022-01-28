const express = require('express');
const verificacionRouter = require('./verificacion');

function routerApi(app){
    const router = express.Router();
    console.log('paso 1');
    app.use('/', router);
    router.use('validate-anomaly', verificacionRouter);
    console.log('paso 3');
};

module.exports = routerApi;