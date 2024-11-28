let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_api'
});

connection.connection(function(error) {
    if (!error) {
        console.log(error);
    } else {
        console.log('Connected Successfully');
    }
})

module.exports = connection;