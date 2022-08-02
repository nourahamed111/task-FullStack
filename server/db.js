const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "noura@123",
  host: "localhost",
  port: 5432,
  database: "task"
});

module.exports = pool;
