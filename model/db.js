const { Pool } = require('pg');

const pool = new Pool({
    user: "anthony",
    host: "127.0.0.1",
    database: "radiacion",
    password: "123",
    port:5432,
});

module.export = pool;