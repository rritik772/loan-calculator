const mariaDB = require('mariadb');

const meta = mariaDB.createPool({
    user:"root",
    password:"12345",
    host:"localhost",
    database:"IBM"
})

async function getConnection(){
    return await meta.getConnection();
}

module.exports = getConnection();