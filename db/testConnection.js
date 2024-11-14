const pool = require('./db/connection');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Connection error:', err);
    } else {
        console.log('Connection successful:', res.rows);
    }
    pool.end();
});  