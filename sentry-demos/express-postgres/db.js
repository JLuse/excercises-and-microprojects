const { Pool } = require('pg');

const pool = new Pool({
  user: 'jordanluse',
  password: 'qazwsx12',
  host: 'localhost',
  port: 2121, // default Postgres port
  database: 'analysis'
});

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = {
  query: (text, params) => pool.query(text, params)
};
