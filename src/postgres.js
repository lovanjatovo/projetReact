const { Pool } = require('pg');
const pool = new Pool({
  user: 'hei',
  host: 'localhost',
  database: 'personne',
  password: 'Animal',
  port: 5432,
});

module.exports = pool;
