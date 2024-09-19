const http = require('http');

// Create a server to handle requests
const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');
    } else if (url === '/submit' && method === 'POST') {
        let body = '';

        // Collect data chunks from the request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Once all data is received, process it
        req.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Data received', data: body }));
        });
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});
