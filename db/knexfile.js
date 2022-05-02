// Update with your config settings.
require('dotenv').config({path:"../.env"});
const pg = require('pg');
// pg.defaults.ssl = true; // Uncomment when connecting to HEROKU

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client:'pg',
  connection: process.env.DATABASE_URL,
  seeds:{
    directory:"./seeds"
  },
  migrations:{
    directory:"./migrations"
  }
};