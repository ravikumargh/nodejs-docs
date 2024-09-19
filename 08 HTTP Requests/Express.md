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