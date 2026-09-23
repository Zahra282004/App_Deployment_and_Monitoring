const mysql = require('mysql2');

const db = mysql.createConnection({
   // Tries to read from Kubernetes environment variables first, falls back to defaults for local dev
   host: process.env.DB_HOST || 'db-service',
   port: process.env.DB_PORT || '3306',
   user: process.env.DB_USER || 'root',
   password: process.env.DB_PASSWORD || '12345678',
   database: process.env.DB_NAME || 'react_node_app'
});

module.exports = db;

