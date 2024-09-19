const fs = require('fs');

// Asynchronous file reading with a callback
fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('This code runs before the file is read');
