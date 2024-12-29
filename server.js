const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Anubhabseal277', // Replace with your MySQL password
    database: 'register_db' // Replace with your database name
});

// Connect to Database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to the database.');
});

// API Endpoint to handle form submission
app.post('/register', (req, res) => {
    const { name, dob, email, password } = req.body;

    if (!name || !dob || !email || !password) {
        return res.status(400).send('All fields are required!');
    }

    const sql = 'INSERT INTO users (name, dob, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, dob, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data: ', err);
            return res.status(500).send('Database error!');
        }
        res.status(200).send('User registered successfully!');
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
