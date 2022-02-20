require("env2")(".env");
const { Pool } = require("pg");

const { DB_URL } = process.env;
const options = {
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
};

module.exports = new Pool(options);
