const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ablego_db',
    password: '22.1.8111',
    port: 5432
});

module.exports = pool;