const { Pool } = require("pg");
const keys = require("../../keys");

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    port: keys.pgPort,
    password: keys.pgPassword
});

function initializeDb() {
    console.log("Postgres Config:", keys);
    pgClient.connect()
        .then(() => {
            console.log("Connected to Postgres");
            return pgClient.query("CREATE TABLE IF NOT EXISTS values (number INT)");
        })
        .catch(err => console.log("Postgres connection error", err));
}

module.exports = { initializeDb };
