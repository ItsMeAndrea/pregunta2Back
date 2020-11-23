const pg = require("pg");
const dotenv = require("dotenv");
const { Pool } = pg;
const url = require("url");
dotenv.config();

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");

const pool = new Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
});

module.exports = pool;
