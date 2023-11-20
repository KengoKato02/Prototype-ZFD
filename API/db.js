const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'default',
  host: 'ep-cold-credit-01757332-pooler.us-east-1.postgres.vercel-storage.com',
  database: 'verceldb',
  password: 'hoUYrsWBqZ64',
  port: 5432,
  ssl: {
    require: true,
    rejectUnauthorized: true, // Set to true in a production environment with a valid SSL certificate
  },
});

module.exports = pool;
