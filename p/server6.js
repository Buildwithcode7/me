const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Handle POST request
app.post('/submit', (req, res) => {

    console.log("Received Data:", req.body);

    res.send("Data received successfully via Ajax!");

});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});