const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const { Pool } = require('pg');

const app = express();

// Configuration de la connexion à PostgreSQL
const pool = new Pool({
    user: 'louis',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);

// Connect to PostgreSQL
pool.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to PostgreSQL');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
