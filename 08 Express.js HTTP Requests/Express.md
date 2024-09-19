# Using Express.js for Simplified HTTP Request Handling:
While the http module is great for learning and small projects, most real-world applications use frameworks like Express.js. Express simplifies routing, request handling, and middleware integration.

Here’s a simple example using Express:
```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});
```
Express makes routing easier, and handling different HTTP methods is straightforward.

# Middleware in Express.js:
Middleware functions in Express are used to process requests and responses. They sit between the request and response and can modify either, or they can pass control to the next middleware or route handler using the next() function.

## Types of Middleware:
* Application-level Middleware: Applies to all or specific routes in the application.
* Router-level Middleware: Applies only to specific routes using the Express router.
* Error-handling Middleware: Catches and handles errors that occur during request processing.

Example of Application-level Middleware:
```
// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();  // Pass control to the next middleware or route handler
});

// Route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Home Page');
});
```
In this example:

* The middleware logs the HTTP method and URL of every incoming request.
* ``next()`` is called to pass control to the next middleware or route handler in the chain.

# Template Engines with Express.js:
Express allows you to use template engines to generate dynamic HTML pages on the server. Popular template engines include Pug, EJS, and Handlebars.

Example with EJS (Embedded JavaScript):
1 Install EJS:
```
npm install ejs
```
2 Set EJS as the view engine:
```
const express = require('express');
const app = express();

app.set('view engine', 'ejs');   // Set EJS as the templating engine

// Route that renders the EJS template
app.get('/profile', (req, res) => {
    const user = { name: 'John Doe', age: 30 };
    res.render('profile', { user: user });  // Pass data to the template
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

```
3 Create an EJS template (views/profile.ejs):
```
<!DOCTYPE html>
<html>
<head>
    <title>User Profile</title>
</head>
<body>
    <h1><%= user.name %></h1>
    <p>Age: <%= user.age %></p>
</body>
</html>

```
In this example, the profile.ejs template is rendered, and dynamic data (the user object) is inserted into the template.
Templates Location: By default, Express looks for templates in a directory called views. You can change this using app.set('views', path_to_views_directory).