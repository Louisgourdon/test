// Express application setup
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./src/login/auth');



const app = express()
app.use(cors())
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json())
app.use(authRoutes);

app.listen(5000, err => {
  console.log("OK Listening")
})

// Postgres client not working
// const { initializeDb } = require('./src/db/pgClient');
// initializeDb();

// Postgres client working
const { Pool } = require("pg")
const keys = require("./keys")
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  port: keys.pgPort,
  password: keys.pgPassword
})
pgClient.on("connect", client => {
  client
      .query("CREATE TABLE IF NOT EXISTS values (number INT)")
      .catch(err => console.log("Postgres error", err));
});

// API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Crypto api
const rssController = require('./src/controllers/rssController');
const cryptoController = require('./src/controllers/cryptoController');

app.get('/api/news', rssController.getNews);
app.get('/api/crypto/:id', cryptoController.getCryptoById);

