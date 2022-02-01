const express = require('express');
const verificacionRouter = require('./verificacion');

function routerApi(app){
    const router = express.Router();
    app.use('/', router);
    console.log('routerApi');
    router.use('/validate-anomaly', verificacionRouter);
};

module.exports = routerApi;