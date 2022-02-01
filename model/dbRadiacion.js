const pool = require('./db');

const select =  async()=>{
    const data = await pool.query("select * from calculo");
    return data.rows;
    
};

const insert = async (dataOne, dataTwo) =>{
    const queryInsert = 'insert into calculo(count_anomalies, count_no_anomalies) values ($1,$2)';
    const values =[ dataOne, dataTwo ];
    const insert = await pool.query(queryInsert, values);
    return insert;
};

module.exports = {select, insert};