# Handling HTTP Requests in Node.js
In Node.js, handling HTTP requests is one of the core functionalities, allowing the creation of web servers that can respond to various client requests. To manage HTTP requests, Node.js provides a built-in http module that enables the creation of web servers and clients.

## Steps to Handle HTTP Requests:
1 Import the http module:

* Node.js has a built-in http module for handling HTTP requests and responses.
* Use the require() function to include it in your application.

2 Create an HTTP Server:

* The ``http.createServer()`` method creates a new HTTP server instance. This server can listen for incoming requests from clients (like web browsers).

3 Define the Request Listener Function:

* The ``createServer()`` method accepts a callback function, which is triggered every time the server receives a request. This callback function typically has two arguments: request and response.
* ``request`` – contains information about the incoming request (method, URL, headers, etc.).
* ``response`` – is used to send back data to the client (status code, headers, body).

4 Start the Server:

* The server is started using the ``listen()`` method, which binds the server to a specific port and begins listening for incoming connections.

### Basic Example of Handling HTTP Requests:
```
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
```

Explanation of the Code:
* http.createServer(): Creates a new server.
* req: Represents the incoming HTTP request object. It contains data such as the HTTP method, URL, headers, and query parameters.
* res: Represents the HTTP response object, used to send back the response to the client. You can set status codes, headers, and the response body using this object.
* res.end(): Ends the response process and sends the content back to the client.
* server.listen(3000): The server listens for requests on port 3000.

### Working with Query Parameters:
In many cases, you might need to handle query parameters from the URL (e.g., ``/search?query=nodejs``).
```
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { method, url: reqUrl } = req;
    
    if (method === 'GET') {
        // Parse the URL and extract query parameters
        const parsedUrl = new URL(reqUrl, `http://${req.headers.host}`);
        const query = parsedUrl.searchParams;

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'Query parameters received',
            query: query.toString(),
            search: query.get('search')
        }));
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```
Explanation:
* URL(): The URL constructor is used to parse the full URL including query parameters.
* searchParams: This allows access to query parameters, and you can retrieve individual query values using .get().

### Serving JSON Responses:
In modern web applications, you often need to send and receive JSON data. Here’s an example of serving a JSON response:
```
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data' && req.method === 'GET') {
        const data = {
            name: 'John Doe',
            age: 30,
            profession: 'Developer'
        };

        // Set Content-Type header to JSON
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;

        // Send JSON response
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```
Explanation:
* JSON.stringify(): Converts the JavaScript object into a JSON string before sending it in the response.
* The Content-Type is set to application/json so that the client knows it’s receiving a JSON response.

### Handling Different Request Types:
In Node.js, HTTP requests can have different methods (e.g., GET, POST, PUT, DELETE) that correspond to different types of operations in a RESTful API.

Here’s how you can handle a POST request:
```
const http = require('http');

// Create a server to handle requests
const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/submit' && method === 'POST') {
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

```

Explanation of the POST Example:
* When the server receives a POST request at the /submit endpoint, it listens to incoming data chunks (req.on('data')).
* The data is collected in the body variable, and once the request is complete (req.on('end')), the server sends a response back to the client with the received data.

# Routing:
Routing refers to determining how to respond to different HTTP requests based on their URL or method. In the examples above, you’ve seen simple routing using the if...else statements, checking the url and method.
## HTTP Request Methods:

* GET: Retrieve data from the server.
* POST: Send data to the server (e.g., form submissions).
* PUT: Update data on the server.
* DELETE: Remove data from the server.
