const express = require('express');

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {

    res.send(`
        <form action="/login" method="POST">

            Email:
            <input type="email" name="email_id" required><br><br>

            Password:
            <input type="password" name="password" required><br><br>

            <button type="submit">Login</button>

        </form>
    `);

});

// Login Route
app.post('/login', (req, res) => {

    const { email_id, password } = req.body;

    if (email_id === "admin@test.com" && password === "1234") {

        res.send("Authentication Successful");

    } else {

        res.send("Invalid Credentials");

    }

});

// Start Server
app.listen(5000, () => {

    console.log("Server running on port 5000");

});