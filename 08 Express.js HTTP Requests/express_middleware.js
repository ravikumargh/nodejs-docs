const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware for all routes in the router
router.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
});

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    console.log('This is first middleware');

    next();  // Pass control to the next middleware or route handler
});


// Custom middleware function
const myMiddleware = (req, res, next) => {
    console.log('This is secod middleware');
    next(); // Pass control to the next middleware
};

// Use the custom middleware
app.use(myMiddleware);
// Route handler for GET requests to '/'
app.get('/', (req, res) => {
    res.send('Home Page');
});
// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error: ' + err.message);
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
