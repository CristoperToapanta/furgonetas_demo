const pg = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'furgonetas',
  user: 'postgres',
  password: 'crisz77.',
};

const conexion = pg(config);

module.exports = conexion;