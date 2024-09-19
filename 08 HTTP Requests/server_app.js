const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // req contains the request object
    const { method, url } = req;

    // Set the response header to indicate a successful response
    res.setHeader('Content-Type', 'text/plain');

    // Check the URL and method to determine the response
    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');
    } else if (url === '/about' && method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the About Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
