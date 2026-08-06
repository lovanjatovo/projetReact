const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Animaljaune1234',
  port: 5432,
});

module.exports = pool;
