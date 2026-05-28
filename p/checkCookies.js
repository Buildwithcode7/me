// Import the built-in http module
const http = require('http');

// Create the web server
const server = http.createServer((req, res) => {

    // Extract cookies from the request headers
    const cookies = req.headers.cookie;

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response
    if (cookies) {
        res.end(`Success! Cookies from request: ${cookies}`);
    } else {
        res.end(`No cookies found in the request header.`);
    }
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is up and running at http://localhost:3000');
});