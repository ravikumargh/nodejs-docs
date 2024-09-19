const express = require('express');
const app = express();

// Mock database
let users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Add a new user
app.post('/users', express.json(), (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update a user
app.put('/users/:id', express.json(), (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();  // No content response
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
