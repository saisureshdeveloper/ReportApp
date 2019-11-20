const mysql = require('mysql2');

// connection configurations
const reco = mysql.createPool({
    connectionLimit : 100,
    host: 'localhost',
    user: 'root',
    password: 'reco123@',
    database: 'reco_tvs',
    debug    :  false
});
const admin = mysql.createPool({
    connectionLimit : 100,
    host: 'localhost',
    user: 'root',
    password: 'reco123@',
    database: 'admin',
    debug    :  false
});
module.exports = {
    reco:reco,
    admin:admin
};