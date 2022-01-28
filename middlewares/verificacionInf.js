function info(err, req, res, next){
    if(req.body == null){
        res.status(204).json({
            message : 'No se encontro información',
        })
        next();
    }
};

module.export = info;