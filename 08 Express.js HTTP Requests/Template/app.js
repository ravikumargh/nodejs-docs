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
