# Node.js Module
Node.js modules are reusable blocks of code that encapsulate related functionalities, such as handling HTTP requests, file manipulation, or database operations. These modules help in keeping the code organized, maintainable, and reusable across different parts of an application.

In Node.js, modules can be built-in, third-party (via npm), or user-defined (custom modules created by you).

## Types of Node.js Modules:
* Core Modules (Built-in Modules)
* Local Modules (User-defined Modules)
* Third-Party Modules (Installed via npm)

### Core Modules (Built-in Modules)
Node.js comes with several core modules that are directly available without needing to install or download anything. These core modules provide essential functionalities like working with the file system, handling streams, networking, etc.

Some commonly used core modules include:
* **http**: To create HTTP servers and handle HTTP requests.
* **fs**: To interact with the file system (read/write files).
* **path**: To work with file and directory paths.
* **os**: To get information about the operating system.
* **events**: To handle events (such as event emitters and listeners).
* **util**: Provides utility functions (e.g., util.promisify).

Example: Using a Core Module
```
// Import the 'fs' (File System) module
const fs = require('fs');

// Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});
```
In this example, the fs module is used to read a file asynchronously.

### Local Modules (User-Defined Modules)
You can create your own custom modules in Node.js, which are useful for organizing and reusing code. These modules can export functions, objects, or variables that can be used elsewhere in your application.

**Creating and Using a Local Module:**
Step 1: Create a Local Module (mathOperations.js)
```
// mathOperations.js (your custom module)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```
Step 2: Import and Use the Module
```
// app.js (main application file)

// Import the custom module
const math = require('./mathOperations');

// Use the functions from the custom module
console.log('Addition: ', math.add(5, 3));       // Output: 8
console.log('Subtraction: ', math.subtract(5, 3)); // Output: 2

```
* ``module.exports`` is used to export functions or variables from a module.
* ``require()`` is used to import the module into another file.

### Third-Party Modules (npm Modules)
npm (Node Package Manager) allows you to install and use third-party modules in your Node.js applications. These modules are created by other developers and can be installed using the ``npm install`` command.

**Examples of popular third-party modules:**

* Express.js: A fast web framework for building APIs and web applications.
* Mongoose: An ODM for MongoDB.
* Lodash: A utility library that provides helpful functions for working with arrays, objects, and more.

Example
```
npm install lodash
```
Use Lodash in Your Application
```
// Import the lodash module
const _ = require('lodash');

// Use a lodash function (e.g., 'chunk')
const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray);  // Output: [[1, 2], [3, 4], [5, 6]]

```