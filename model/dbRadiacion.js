const conexion = require('./db');

module.export = {

    async insert(count_anomalies, count_no_anomalies){
          let result = await conexion.query(
              `insert into calculo 
                (count_anomalies, count_no_anomalies)
                values
                ($1, $2)`,[count_anomalies, count_no_anomalies]);
    },

};