const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pgClient } = require('../db/pgClient');



router.post(`/register`, async (req, res) => {

    try {
    const { first_name, last_name, email, password, confirmPassword } = req.body;
        console.log('Received password:', password, 'Confirm Password:', confirmPassword);


        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Les mots de passe ne correspondent pas." });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const result = await pgClient.query(
            'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id',
            [first_name, last_name, email, hashedPassword]
        );


        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;