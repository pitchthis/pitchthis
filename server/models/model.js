const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const PG_URI = `postgres://gkjpdphx:yMNm5R41FNe2wvK8725n861fs79RJwRx@lallah.db.elephantsql.com:5432/gkjpdphx`;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  },
};

