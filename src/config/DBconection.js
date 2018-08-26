const mysql = require('mysql');

module.exports = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin120324',
        database: 'encuesta'
    });
}
