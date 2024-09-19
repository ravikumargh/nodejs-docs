const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log('This will log first, even before file reading finishes.');
